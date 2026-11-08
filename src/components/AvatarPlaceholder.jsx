import { useState } from 'react';
import profilePhoto from '../assets/profile.jpg';
import defaultAvatar from '../assets/balikis_avatar.svg';

/**
 * AvatarPlaceholder Component
 * 
 * Uses Nurudeen Balikis's real profile photo from `src/assets/profile.jpg`.
 * If an error occurs, it smoothly falls back to the SVG avatar.
 */
export const AvatarPlaceholder = ({ 
  size = 260, 
  alt = "Nurudeen Balikis — Data Analyst",
  customSrc = profilePhoto,
  objectPosition = "center 18%",
  className = "" 
}) => {
  const [imageError, setImageError] = useState(false);

  // Use customSrc if available and hasn't errored, otherwise fallback to our SVG avatar
  const sourceImage = (customSrc && !imageError) ? customSrc : defaultAvatar;

  return (
    <div className={`d-inline-block position-relative ${className}`}>
      <div 
        className="avatar-glow-ring"
        style={{
          width: `${size + 14}px`,
          height: `${size + 14}px`
        }}
      >
        <img
          src={sourceImage}
          alt={alt}
          onError={() => setImageError(true)}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            objectFit: 'cover',
            objectPosition: objectPosition,
            borderRadius: '50%'
          }}
          loading="eager"
        />
      </div>

      {/* Analytics Pulse Floating Badge */}
      <div 
        className="position-absolute bg-white px-2 py-1 rounded-pill shadow-sm border d-flex align-items-center gap-1"
        style={{
          bottom: '8px',
          right: '12px',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#0f172a'
        }}
      >
        <span 
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'inline-block'
          }}
        ></span>
        <span>Data Pro</span>
      </div>
    </div>
  );
};
