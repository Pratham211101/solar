import React from 'react';
import styled from 'styled-components';

interface StyledFormProps {
  title: string;
  formSubtitle: string;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  productName?: string;
  isGeneralContact?: boolean;
}

const StyledContactForm = ({
  title,
  formSubtitle,
  isSubmitting,
  onSubmit,
  formData,
  onChange,
  productName,
  isGeneralContact = false
}: StyledFormProps) => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <form className="form" onSubmit={onSubmit}>
          <span className="title">{title}</span>
          <p className="subtitle">{formSubtitle}</p>
          
          <div className="input-grid">
            <div className="input-container">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient-stroke" x1={0} y1={0} x2={24} y2={24} gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="black" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="8" r="4" stroke="url(#gradient-stroke)" strokeWidth={1} />
                <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="url(#gradient-stroke)" strokeWidth={1} />
              </svg>
              <input 
                className="input" 
                name={isGeneralContact ? "firstName" : "name"} 
                type="text" 
                placeholder={isGeneralContact ? "First Name" : "Full Name"} 
                required 
                value={isGeneralContact ? formData.firstName : formData.name}
                onChange={onChange}
              />
            </div>

            <div className="input-container">
              {isGeneralContact ? (
                <>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="url(#gradient-stroke)" strokeWidth={1} />
                    <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="url(#gradient-stroke)" strokeWidth={1} />
                  </svg>
                  <input 
                    className="input" 
                    name="lastName" 
                    type="text" 
                    placeholder="Last Name" 
                    required 
                    value={formData.lastName}
                    onChange={onChange}
                  />
                </>
              ) : (
                <>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                      <path d="M21.6365 5H3L12.2275 12.3636L21.6365 5Z" />
                      <path d="M16.5 11.5L22.5 6.5V17L16.5 11.5Z" />
                      <path d="M8 11.5L2 6.5V17L8 11.5Z" />
                      <path d="M9.5 12.5L2.81805 18.5002H21.6362L15 12.5L12 15L9.5 12.5Z" />
                    </g>
                  </svg>
                  <input 
                    className="input" 
                    name="email" 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    value={formData.email}
                    onChange={onChange}
                  />
                </>
              )}
            </div>

            {isGeneralContact && (
              <div className="input-container full-width">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                    <path d="M21.6365 5H3L12.2275 12.3636L21.6365 5Z" />
                    <path d="M16.5 11.5L22.5 6.5V17L16.5 11.5Z" />
                    <path d="M8 11.5L2 6.5V17L8 11.5Z" />
                    <path d="M9.5 12.5L2.81805 18.5002H21.6362L15 12.5L12 15L9.5 12.5Z" />
                  </g>
                </svg>
                <input 
                  className="input" 
                  name="email" 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={formData.email}
                  onChange={onChange}
                />
              </div>
            )}

            {!isGeneralContact && (
              <>
                <div className="input-container">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="url(#gradient-stroke)" fill="none" strokeWidth={1} />
                  </svg>
                  <input 
                    className="input" 
                    name="phone" 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    value={formData.phone}
                    onChange={onChange}
                  />
                </div>

                <div className="input-container">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="url(#gradient-stroke)" fill="none" strokeWidth={1} />
                  </svg>
                  <input 
                    className="input" 
                    name="organization" 
                    type="text" 
                    placeholder="Organization" 
                    value={formData.organization}
                    onChange={onChange}
                  />
                </div>
              </>
            )}
          </div>

          <div className="input-container full-width">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="url(#gradient-stroke)" fill="none" strokeWidth={1} />
            </svg>
            <textarea 
              className="input textarea" 
              name={isGeneralContact ? "message" : "requirements"} 
              placeholder={isGeneralContact ? "How can we help you?" : `Interested in ${productName}...`}
              value={isGeneralContact ? formData.message : formData.requirements}
              onChange={onChange}
              rows={isGeneralContact ? 3 : 2}
              required={isGeneralContact}
            />
          </div>

          <div className="login-button">
            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"}
            </button>
          </div>
          <div className="texture" />
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    background: transparent;
  }

  .form {
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid transparent;
    -o-border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-width: 0 2px 0px 2px;
    background: radial-gradient(
        100% 61.73% at 100% 50%,
        rgba(255, 224, 166, 0.05) 0%,
        transparent 100%
      ),
      radial-gradient(
        91.09% 56.23% at 0% 50%,
        rgba(255, 224, 166, 0.05) 0%,
        transparent 100%
      ),
      rgba(255, 255, 255, 0.01);
    position: relative;
    border-radius: 0px;
    backdrop-filter: blur(10px);
  }
  
  .form::before,
  .form::after {
    display: none;
  }

  .form .title {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    background: linear-gradient(rgb(255, 255, 255), rgb(150, 150, 150));
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: -1rem;
  }

  .form .subtitle {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.75rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    margin-bottom: 1rem;
  }

  .input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .input-grid {
      grid-template-columns: 1fr;
    }
  }

  .form .input-container {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0px;
    padding: 0 0.75rem;
    transition: all 0.3s ease;
  }

  .form .input-container.full-width {
    grid-column: 1 / -1;
  }

  .form .input-container svg {
    stroke: rgba(255, 255, 255, 0.3);
    flex-shrink: 0;
  }

  .form .input-container .input {
    background: none;
    border: none;
    padding: 1.25rem 1rem;
    width: 100%;
    color: white;
    font-size: 0.95rem;
    font-family: inherit;
  }

  .form .input-container .input.textarea {
    resize: none;
  }

  .form .input-container .input:focus {
    outline: none;
  }

  .form .input-container:focus-within {
    background: rgba(255, 224, 166, 0.05);
    border-color: rgba(255, 224, 166, 0.3);
    box-shadow: 0 0 20px rgba(255, 224, 166, 0.05);
  }

  .form .input-container:focus-within svg {
    stroke: #ffe0a6;
  }

  .form .login-button {
    width: 100%;
    position: relative;
    margin-top: 1rem;
  }

  .form .login-button .submit-btn {
    cursor: pointer;
    padding: 1.25rem;
    width: 100%;
    background: radial-gradient(
        100% 45% at 100% 50%,
        rgba(255, 224, 166, 0.08) 0%,
        transparent 100%
      ),
      radial-gradient(
        100% 45% at 0% 50%,
        rgba(255, 224, 166, 0.08) 0%,
        transparent 100%
      );
    border: 1px solid transparent;
    border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-width: 0 1px 0 1px;
    border-radius: 0px;
    text-align: center;
    color: #ffe0a6;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .form .login-button::before {
    display: none;
  }

  .form .login-button:hover .submit-btn {
    background: radial-gradient(
        100% 45% at 100% 50%,
        rgba(255, 224, 166, 0.15) 0%,
        transparent 100%
      ),
      radial-gradient(
        100% 45% at 0% 50%,
        rgba(255, 224, 166, 0.15) 0%,
        transparent 100%
      );
    border-color: rgba(255, 224, 166, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  
  .form .login-button:active .submit-btn {
    transform: translateY(0);
  }

  .form .texture {
    display: none;
  }

  @keyframes movingLines {
    0% { background-position: 0 0; }
    100% { background-position: 0 5px; }
  }
`;

export default StyledContactForm;
