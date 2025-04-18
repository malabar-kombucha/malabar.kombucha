'use client';

import { useTheme } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faLeaf, 
  faFlask, 
  faSeedling, 
  faSprayCan,
  faDroplet,
  faFire,
  faSun,
  faCloud,
  faStar,
  faMoon,
  faHeart,
  faSnowflake,
  faUmbrella,
  faTree,
  faMountain,
  faGem,
  faWater,
  faSprayCanSparkles,
  faWheatAwn,
  faPepperHot,
  faBottleWater,
  faGlassWater,
  faWineGlass,
  faMartiniGlass,
  faGlassWhiskey,
  faGlassCheers,
  faGlassMartini
} from '@fortawesome/free-solid-svg-icons';

interface ThemeElement {
  type: 'emoji' | 'icon';
  content: string | IconDefinition;
  className: string;
  position: {
    left: string;
    top: string;
    rotation: number;
  };
}

interface ThemeElements {
  [key: string]: ThemeElement[];
}

const themeElements: ThemeElements = {
  'Black Goddess': [
    { type: 'emoji', content: '☕', className: 'w-16 h-16 animate-float-1', position: { left: '15%', top: '20%', rotation: 15 } },
    { type: 'icon', content: faLeaf, className: 'w-12 h-12 animate-float-2', position: { left: '75%', top: '30%', rotation: -30 } },
    { type: 'icon', content: faFlask, className: 'w-14 h-14 animate-float-3', position: { left: '25%', top: '60%', rotation: 45 } },
    { type: 'emoji', content: '🌿', className: 'w-14 h-14 animate-float-4', position: { left: '65%', top: '50%', rotation: -15 } },
    { type: 'icon', content: faGem, className: 'w-12 h-12 animate-float-5', position: { left: '40%', top: '25%', rotation: 60 } },
    { type: 'emoji', content: '✨', className: 'w-16 h-16 animate-float-6', position: { left: '80%', top: '70%', rotation: -45 } }
  ],
  'Classic': [
    { type: 'emoji', content: '🍵', className: 'w-16 h-16 animate-float-1', position: { left: '20%', top: '25%', rotation: 20 } },
    { type: 'icon', content: faLeaf, className: 'w-12 h-12 animate-float-2', position: { left: '70%', top: '35%', rotation: -25 } },
    { type: 'icon', content: faSeedling, className: 'w-14 h-14 animate-float-3', position: { left: '30%', top: '65%', rotation: 40 } },
    { type: 'emoji', content: '🌱', className: 'w-14 h-14 animate-float-4', position: { left: '60%', top: '55%', rotation: -20 } },
    { type: 'icon', content: faWheatAwn, className: 'w-12 h-12 animate-float-5', position: { left: '45%', top: '30%', rotation: 55 } },
    { type: 'emoji', content: '💧', className: 'w-16 h-16 animate-float-6', position: { left: '75%', top: '75%', rotation: -35 } }
  ],
  'Strawberry': [
    { type: 'emoji', content: '🍓', className: 'w-16 h-16 animate-float-1', position: { left: '25%', top: '30%', rotation: 25 } },
    { type: 'icon', content: faHeart, className: 'w-12 h-12 animate-float-2', position: { left: '65%', top: '40%', rotation: -20 } },
    { type: 'emoji', content: '🌺', className: 'w-14 h-14 animate-float-3', position: { left: '35%', top: '70%', rotation: 45 } },
    { type: 'icon', content: faStar, className: 'w-12 h-12 animate-float-4', position: { left: '55%', top: '60%', rotation: -15 } },
    { type: 'emoji', content: '💖', className: 'w-14 h-14 animate-float-5', position: { left: '50%', top: '35%', rotation: 50 } },
    { type: 'icon', content: faGlassWater, className: 'w-12 h-12 animate-float-6', position: { left: '70%', top: '80%', rotation: -40 } }
  ],
  'Mango': [
    { type: 'emoji', content: '🥭', className: 'w-16 h-16 animate-float-1', position: { left: '30%', top: '35%', rotation: 30 } },
    { type: 'icon', content: faSun, className: 'w-12 h-12 animate-float-2', position: { left: '60%', top: '45%', rotation: -25 } },
    { type: 'emoji', content: '🌴', className: 'w-14 h-14 animate-float-3', position: { left: '40%', top: '75%', rotation: 50 } },
    { type: 'icon', content: faTree, className: 'w-12 h-12 animate-float-4', position: { left: '50%', top: '65%', rotation: -20 } },
    { type: 'emoji', content: '☀️', className: 'w-14 h-14 animate-float-5', position: { left: '55%', top: '40%', rotation: 60 } },
    { type: 'icon', content: faGlassMartini, className: 'w-12 h-12 animate-float-6', position: { left: '65%', top: '85%', rotation: -45 } }
  ],
  'Pomegranate': [
    { type: 'emoji', content: '🍎', className: 'w-16 h-16 animate-float-1', position: { left: '35%', top: '40%', rotation: 35 } },
    { type: 'icon', content: faDroplet, className: 'w-12 h-12 animate-float-2', position: { left: '55%', top: '50%', rotation: -30 } },
    { type: 'emoji', content: '💎', className: 'w-14 h-14 animate-float-3', position: { left: '45%', top: '80%', rotation: 55 } },
    { type: 'icon', content: faGem, className: 'w-12 h-12 animate-float-4', position: { left: '45%', top: '70%', rotation: -25 } },
    { type: 'emoji', content: '❤️', className: 'w-14 h-14 animate-float-5', position: { left: '60%', top: '45%', rotation: 65 } },
    { type: 'icon', content: faGlassCheers, className: 'w-12 h-12 animate-float-6', position: { left: '60%', top: '90%', rotation: -50 } }
  ],
  'Passion Fruit': [
    { type: 'emoji', content: '🍇', className: 'w-16 h-16 animate-float-1', position: { left: '40%', top: '45%', rotation: 40 } },
    { type: 'icon', content: faStar, className: 'w-12 h-12 animate-float-2', position: { left: '50%', top: '55%', rotation: -35 } },
    { type: 'emoji', content: '🌺', className: 'w-14 h-14 animate-float-3', position: { left: '50%', top: '85%', rotation: 60 } },
    { type: 'icon', content: faHeart, className: 'w-12 h-12 animate-float-4', position: { left: '40%', top: '75%', rotation: -30 } },
    { type: 'emoji', content: '✨', className: 'w-14 h-14 animate-float-5', position: { left: '65%', top: '50%', rotation: 70 } },
    { type: 'icon', content: faWineGlass, className: 'w-12 h-12 animate-float-6', position: { left: '55%', top: '95%', rotation: -55 } }
  ],
  'Tender Coconut': [
    { type: 'emoji', content: '🥥', className: 'w-16 h-16 animate-float-1', position: { left: '45%', top: '50%', rotation: 45 } },
    { type: 'icon', content: faCloud, className: 'w-12 h-12 animate-float-2', position: { left: '45%', top: '60%', rotation: -40 } },
    { type: 'emoji', content: '🌴', className: 'w-14 h-14 animate-float-3', position: { left: '55%', top: '90%', rotation: 65 } },
    { type: 'icon', content: faTree, className: 'w-12 h-12 animate-float-4', position: { left: '35%', top: '80%', rotation: -35 } },
    { type: 'emoji', content: '💦', className: 'w-14 h-14 animate-float-5', position: { left: '70%', top: '55%', rotation: 75 } },
    { type: 'icon', content: faBottleWater, className: 'w-12 h-12 animate-float-6', position: { left: '50%', top: '100%', rotation: -60 } }
  ],
  'Berry Medley': [
    { type: 'emoji', content: '🫐', className: 'w-16 h-16 animate-float-1', position: { left: '50%', top: '55%', rotation: 50 } },
    { type: 'icon', content: faHeart, className: 'w-12 h-12 animate-float-2', position: { left: '40%', top: '65%', rotation: -45 } },
    { type: 'emoji', content: '🍒', className: 'w-14 h-14 animate-float-3', position: { left: '60%', top: '95%', rotation: 70 } },
    { type: 'icon', content: faStar, className: 'w-12 h-12 animate-float-4', position: { left: '30%', top: '85%', rotation: -40 } },
    { type: 'emoji', content: '💜', className: 'w-14 h-14 animate-float-5', position: { left: '75%', top: '60%', rotation: 80 } },
    { type: 'icon', content: faGlassCheers, className: 'w-12 h-12 animate-float-6', position: { left: '45%', top: '105%', rotation: -65 } }
  ],
  'Blueberry': [
    { type: 'emoji', content: '🫐', className: 'w-16 h-16 animate-float-1', position: { left: '55%', top: '60%', rotation: 55 } },
    { type: 'icon', content: faMoon, className: 'w-12 h-12 animate-float-2', position: { left: '35%', top: '70%', rotation: -50 } },
    { type: 'emoji', content: '💙', className: 'w-14 h-14 animate-float-3', position: { left: '65%', top: '100%', rotation: 75 } },
    { type: 'icon', content: faStar, className: 'w-12 h-12 animate-float-4', position: { left: '25%', top: '90%', rotation: -45 } },
    { type: 'emoji', content: '🌙', className: 'w-14 h-14 animate-float-5', position: { left: '80%', top: '65%', rotation: 85 } },
    { type: 'icon', content: faGlassWhiskey, className: 'w-12 h-12 animate-float-6', position: { left: '40%', top: '110%', rotation: -70 } }
  ],
  'Nutmeg': [
    { type: 'emoji', content: '🌰', className: 'w-16 h-16 animate-float-1', position: { left: '60%', top: '65%', rotation: 60 } },
    { type: 'icon', content: faFire, className: 'w-12 h-12 animate-float-2', position: { left: '30%', top: '75%', rotation: -55 } },
    { type: 'emoji', content: '✨', className: 'w-14 h-14 animate-float-3', position: { left: '70%', top: '105%', rotation: 80 } },
    { type: 'icon', content: faPepperHot, className: 'w-12 h-12 animate-float-4', position: { left: '20%', top: '95%', rotation: -50 } },
    { type: 'emoji', content: '🔥', className: 'w-14 h-14 animate-float-5', position: { left: '85%', top: '70%', rotation: 90 } },
    { type: 'icon', content: faGlassWhiskey, className: 'w-12 h-12 animate-float-6', position: { left: '35%', top: '115%', rotation: -75 } }
  ],
  'Pineapple': [
    { type: 'emoji', content: '🍍', className: 'w-16 h-16 animate-float-1', position: { left: '65%', top: '70%', rotation: 65 } },
    { type: 'icon', content: faSun, className: 'w-12 h-12 animate-float-2', position: { left: '25%', top: '80%', rotation: -60 } },
    { type: 'emoji', content: '🌴', className: 'w-14 h-14 animate-float-3', position: { left: '75%', top: '110%', rotation: 85 } },
    { type: 'icon', content: faTree, className: 'w-12 h-12 animate-float-4', position: { left: '15%', top: '100%', rotation: -55 } },
    { type: 'emoji', content: '☀️', className: 'w-14 h-14 animate-float-5', position: { left: '90%', top: '75%', rotation: 95 } },
    { type: 'icon', content: faGlassMartini, className: 'w-12 h-12 animate-float-6', position: { left: '30%', top: '120%', rotation: -80 } }
  ],
  'Ginger': [
    { type: 'emoji', content: '🫚', className: 'w-16 h-16 animate-float-1', position: { left: '70%', top: '75%', rotation: 70 } },
    { type: 'icon', content: faFire, className: 'w-12 h-12 animate-float-2', position: { left: '20%', top: '85%', rotation: -65 } },
    { type: 'emoji', content: '🔥', className: 'w-14 h-14 animate-float-3', position: { left: '80%', top: '115%', rotation: 90 } },
    { type: 'icon', content: faPepperHot, className: 'w-12 h-12 animate-float-4', position: { left: '10%', top: '105%', rotation: -60 } },
    { type: 'emoji', content: '✨', className: 'w-14 h-14 animate-float-5', position: { left: '95%', top: '80%', rotation: 100 } },
    { type: 'icon', content: faGlassCheers, className: 'w-12 h-12 animate-float-6', position: { left: '25%', top: '125%', rotation: -85 } }
  ],
  'Gooseberry': [
    { type: 'emoji', content: '🫐', className: 'w-16 h-16 animate-float-1', position: { left: '75%', top: '80%', rotation: 75 } },
    { type: 'icon', content: faLeaf, className: 'w-12 h-12 animate-float-2', position: { left: '15%', top: '90%', rotation: -70 } },
    { type: 'emoji', content: '🌿', className: 'w-14 h-14 animate-float-3', position: { left: '85%', top: '120%', rotation: 95 } },
    { type: 'icon', content: faStar, className: 'w-12 h-12 animate-float-4', position: { left: '5%', top: '110%', rotation: -65 } },
    { type: 'emoji', content: '💚', className: 'w-14 h-14 animate-float-5', position: { left: '100%', top: '85%', rotation: 105 } },
    { type: 'icon', content: faGlassWater, className: 'w-12 h-12 animate-float-6', position: { left: '20%', top: '130%', rotation: -90 } }
  ],
  'Orange': [
    { type: 'emoji', content: '🍊', className: 'w-16 h-16 animate-float-1', position: { left: '80%', top: '85%', rotation: 80 } },
    { type: 'icon', content: faSun, className: 'w-12 h-12 animate-float-2', position: { left: '10%', top: '95%', rotation: -75 } },
    { type: 'emoji', content: '☀️', className: 'w-14 h-14 animate-float-3', position: { left: '90%', top: '125%', rotation: 100 } },
    { type: 'icon', content: faStar, className: 'w-12 h-12 animate-float-4', position: { left: '0%', top: '115%', rotation: -70 } },
    { type: 'emoji', content: '🌞', className: 'w-14 h-14 animate-float-5', position: { left: '105%', top: '90%', rotation: 110 } },
    { type: 'icon', content: faGlassMartini, className: 'w-12 h-12 animate-float-6', position: { left: '15%', top: '135%', rotation: -95 } }
  ],
  'Turmeric': [
    { type: 'emoji', content: '🟡', className: 'w-16 h-16 animate-float-1', position: { left: '85%', top: '90%', rotation: 85 } },
    { type: 'icon', content: faFire, className: 'w-12 h-12 animate-float-2', position: { left: '5%', top: '100%', rotation: -80 } },
    { type: 'emoji', content: '🌞', className: 'w-14 h-14 animate-float-3', position: { left: '95%', top: '130%', rotation: 105 } },
    { type: 'icon', content: faSun, className: 'w-12 h-12 animate-float-4', position: { left: '-5%', top: '120%', rotation: -75 } },
    { type: 'emoji', content: '✨', className: 'w-14 h-14 animate-float-5', position: { left: '110%', top: '95%', rotation: 115 } },
    { type: 'icon', content: faGlassCheers, className: 'w-12 h-12 animate-float-6', position: { left: '10%', top: '140%', rotation: -100 } }
  ]
};

export default function FloatingElements() {
  const { currentTheme } = useTheme();
  const elements = themeElements[currentTheme.name] || [];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {elements.map((element: ThemeElement, index: number) => (
        <div
          key={index}
          className={`absolute ${element.className} flex items-center justify-center`}
          style={{
            left: element.position.left,
            top: element.position.top,
            transform: `rotate(${element.position.rotation}deg)`,
            color: currentTheme.accent,
            opacity: 0.9,
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
        >
          {element.type === 'emoji' ? (
            <span className="text-5xl">{element.content as string}</span>
          ) : (
            <FontAwesomeIcon 
              icon={element.content as IconDefinition} 
              className="w-full h-full"
            />
          )}
        </div>
      ))}
    </div>
  );
} 