"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from '../ThemeContext';

const WHATSAPP_NUMBER = "919496826294";

interface OrderItem {
  id: string;
  flavor: string;
  quantity: number;
  price: number;
}

interface FlavorOption {
  name: string;
  price: number;
}

interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export default function OrderNow() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [pricePerItem, setPricePerItem] = useState(100);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationPermissionAsked, setLocationPermissionAsked] = useState(false);

  const { currentTheme } = useTheme();

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          };
          console.log('User location:', location);
          setUserLocation(location);
          setShowLocationModal(false);
        },
        (error) => {
          console.error('Error getting location:', error.message);
          setShowLocationModal(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      setShowLocationModal(false);
    }
  };

  const handleLocationPermission = (allow: boolean) => {
    if (allow) {
      requestLocation();
    } else {
      setShowLocationModal(false);
    }
  };

  useEffect(() => {
    // Show location permission popup when component mounts
    if (!locationPermissionAsked) {
      setShowLocationModal(true);
      setLocationPermissionAsked(true);
    }
  }, [locationPermissionAsked]);

  const availableFlavors: FlavorOption[] = [
    { name: "Beet", price: 100 },
    { name: "Coco", price: 120 },
    { name: "Grape", price: 110 },
    { name: "Orange", price: 105 },
    { name: "Pome", price: 115 },
    { name: "Blue", price: 125 },
    { name: "Ginger", price: 130 },
    { name: "Mango", price: 115 },
    { name: "Passion", price: 140 },
    { name: "Straw", price: 120 },
    { name: "Classic", price: 100 },
    { name: "Goose", price: 135 },
    { name: "Nutmeg", price: 125 },
    { name: "Pina", price: 130 }
  ];

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');

    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);

    // Format as XXXXX XXXXX
    if (limitedDigits.length <= 5) {
      return limitedDigits;
    } else {
      return `${limitedDigits.slice(0, 5)} ${limitedDigits.slice(5)}`;
    }
  };

  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name can only contain letters and spaces";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "Phone number is required";
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');

    // Must be exactly 10 digits
    if (cleanPhone.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }

    // 10 digit number should start with 6, 7, 8, or 9
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return "Invalid Indian phone number. Must start with 6, 7, 8, or 9";
    }

    return "";
  };

  const validateAddress = (address: string): string => {
    if (!address.trim()) return "Delivery address is required";
    if (address.trim().length < 10) return "Please provide a complete address (minimum 10 characters)";
    return "";
  };

  const handleNameChange = (value: string) => {
    setName(value);
    const error = validateName(value);
    setErrors(prev => ({ ...prev, name: error }));
  };

  const handlePhoneChange = (value: string) => {
    const formattedPhone = formatPhoneNumber(value);
    setPhone(formattedPhone);
    const error = validatePhone(formattedPhone);
    setErrors(prev => ({ ...prev, phone: error }));
  };

  const handleAddressChange = (value: string) => {
    setAddress(value);
    const error = validateAddress(value);
    setErrors(prev => ({ ...prev, address: error }));
  };

  const handleFlavorChange = (flavorName: string) => {
    setSelectedFlavor(flavorName);
    const selectedFlavorOption = availableFlavors.find(flavor => flavor.name === flavorName);
    if (selectedFlavorOption) {
      setPricePerItem(selectedFlavorOption.price);
    }
  };

  const addOrderItem = () => {
    if (selectedFlavor && quantity > 0 && pricePerItem > 0) {
      const newItem: OrderItem = {
        id: Date.now().toString(),
        flavor: selectedFlavor,
        quantity: quantity,
        price: pricePerItem
      };
      setOrderItems([...orderItems, newItem]);
      setSelectedFlavor("");
      setQuantity(1);
      setPricePerItem(100);
    }
  };

  const removeOrderItem = (id: string) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const addressError = validateAddress(address);

    const newErrors = {
      name: nameError,
      phone: phoneError,
      address: addressError
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (nameError || phoneError || addressError) {
      return;
    }

    if (orderItems.length === 0) {
      return;
    }

    const orderDetails = orderItems.map(item =>
      `${item.quantity}x ${item.flavor} - ₹${item.price} each = ₹${item.quantity * item.price}`
    ).join('%0A');

    const totalAmount = calculateTotal();

    // Clean phone number for WhatsApp (remove spaces and add +91)
    const cleanPhoneForWhatsApp = `+91${phone.replace(/\D/g, '')}`;

    // Include location information in the message
    const locationInfo = userLocation
      ? `Location: Lat ${userLocation.latitude.toFixed(6)}, Lng ${userLocation.longitude.toFixed(6)} (Accuracy: ${userLocation.accuracy.toFixed(0)}m)%0A%0A`
      : 'Location: Not available%0A%0A';

    const message = `New Customer Order%0A%0A` +
      `Customer Name: ${name}%0A` +
      `Customer Phone: ${cleanPhoneForWhatsApp}%0A` +
      `Delivery Address: ${address}%0A` +
      `${locationInfo}` +
      `Order Details:%0A${orderDetails}%0A%0A` +
      `Total Amount: ₹${totalAmount}%0A%0A` +
      `Please confirm this order and arrange delivery. Thank you!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
  };

  const isFormValid = !errors.name && !errors.phone && !errors.address && name && phone && address && orderItems.length > 0;

  return (
    <>
      {/* Location Permission Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="rounded-lg p-6 max-w-md mx-4"
            style={{
              background: currentTheme.primary,
              border: `2px solid ${currentTheme.accent}`,
              color: currentTheme.text
            }}
          >
            <h3 className="text-lg font-semibold mb-4" style={{ color: currentTheme.text }}>
              Location Access
            </h3>
            <p className="mb-6" style={{ color: currentTheme.text }}>
              We'd like to access your location to help with accurate delivery. This information will be shared with our delivery team to ensure your order reaches you quickly.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => handleLocationPermission(false)}
                className="px-4 py-2 rounded border"
                style={{
                  background: currentTheme.secondary,
                  border: `1px solid ${currentTheme.accent}`,
                  color: currentTheme.text
                }}
              >
                Skip
              </button>
              <button
                onClick={() => handleLocationPermission(true)}
                className="px-4 py-2 rounded font-medium"
                style={{
                  background: currentTheme.accent,
                  color: currentTheme.text,
                  border: `1px solid ${currentTheme.text}`
                }}
              >
                Allow Location
              </button>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow p-6 flex flex-col gap-4 max-w-2xl mx-auto"
        style={{
          background: currentTheme.primary,
          border: `1.5px solid ${currentTheme.accent}`,
          color: currentTheme.text
        }}
      >
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: currentTheme.text }}
        >
          Order Online
        </h3>

        <div className="flex flex-col">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={e => handleNameChange(e.target.value)}
            className={`px-4 py-2 rounded border outline-none ${errors.name ? 'border-red-500' : ''}`}
            style={{
              background: currentTheme.secondary,
              border: `1px solid ${errors.name ? '#ef4444' : currentTheme.accent}`,
              color: currentTheme.text
            }}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="tel"
            required
            placeholder="Your Phone Number (10 digits)"
            value={phone}
            onChange={e => handlePhoneChange(e.target.value)}
            className={`px-4 py-2 rounded border outline-none ${errors.phone ? 'border-red-500' : ''}`}
            style={{
              background: currentTheme.secondary,
              border: `1px solid ${errors.phone ? '#ef4444' : currentTheme.accent}`,
              color: currentTheme.text
            }}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
          )}
        </div>

        <div className="flex flex-col">
          <textarea
            required
            placeholder="Delivery Address (Please provide complete address)"
            rows={3}
            value={address}
            onChange={e => handleAddressChange(e.target.value)}
            className={`px-4 py-2 rounded border outline-none ${errors.address ? 'border-red-500' : ''}`}
            style={{
              background: currentTheme.secondary,
              border: `1px solid ${errors.address ? '#ef4444' : currentTheme.accent}`,
              color: currentTheme.text
            }}
          />
          {errors.address && (
            <span className="text-red-500 text-sm mt-1">{errors.address}</span>
          )}
        </div>

        <div className="border-t pt-4" style={{ borderColor: currentTheme.accent }}>
          <h4 className="font-semibold mb-3" style={{ color: currentTheme.text }}>
            Add Flavors to Order
          </h4>

          <div className="flex gap-2 mb-3">
            <select
              value={selectedFlavor}
              onChange={e => handleFlavorChange(e.target.value)}
              className="px-4 py-2 rounded border outline-none flex-1"
              style={{
                background: currentTheme.secondary,
                border: `1px solid ${currentTheme.accent}`,
                color: currentTheme.text
              }}
            >
              <option value="">Select Flavor</option>
              {availableFlavors.map(flavor => (
                <option key={flavor.name} value={flavor.name}>
                  {flavor.name} - ₹{flavor.price}
                </option>
              ))}
            </select>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value) || 1)}
              className="px-4 py-2 rounded border outline-none w-20"
              style={{
                background: currentTheme.secondary,
                border: `1px solid ${currentTheme.accent}`,
                color: currentTheme.text
              }}
              placeholder="Qty"
            />

            <div
              className="px-4 py-2 rounded border w-24 flex items-center justify-center font-medium"
              style={{
                background: currentTheme.secondary,
                border: `1px solid ${currentTheme.accent}`,
                color: currentTheme.text
              }}
            >
              ₹{quantity * pricePerItem}
            </div>

            <button
              type="button"
              onClick={addOrderItem}
              className="px-4 py-2 rounded font-medium"
              style={{
                background: currentTheme.accent,
                color: currentTheme.text,
                border: `1px solid ${currentTheme.text}`
              }}
            >
              Add
            </button>
          </div>

          {orderItems.length > 0 && (
            <div className="mb-4">
              <h5 className="font-medium mb-2" style={{ color: currentTheme.text }}>
                Your Order:
              </h5>
              <div className="space-y-2">
                {orderItems.map(item => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-2 rounded"
                    style={{
                      background: currentTheme.secondary,
                      border: `1px solid ${currentTheme.accent}`
                    }}
                  >
                    <span style={{ color: currentTheme.text }}>
                      {item.quantity}x {item.flavor} - ₹{item.price} each = ₹{item.quantity * item.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeOrderItem(item.id)}
                      className="text-red-500 hover:text-red-700 px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2 rounded font-semibold" style={{
                background: currentTheme.accent,
                color: currentTheme.text
              }}>
                Total: ₹{calculateTotal()}
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className="font-bold py-2 px-6 rounded transition-colors duration-200 mt-2 shadow disabled:opacity-50"
          style={{
            background: currentTheme.accent,
            color: currentTheme.text,
            border: `1px solid ${currentTheme.text}`
          }}
        >
          Send Order via WhatsApp
        </button>
      </form>
    </>
  );
}
