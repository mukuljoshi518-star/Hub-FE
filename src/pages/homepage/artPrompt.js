import React from 'react';
import '../../pages/styles/artpromptcard.css';

const ArtPromptCard = () => {
  return (
    <div className="container-fluid px-5 py-4 art-gallery-ui">
      <div className="row g-4">
        {/* Left Panel – Prompt & Metadata */}
        <div className="col-md-6">
          <div className="bg-dark text-white rounded-4 p-4 mb-4 shadow">
            <img
              src="https://img.icons8.com/color/48/ai.png"
              alt="AI Model"
              style={{ width: 32 }}
            />
            <h5 className="mt-3">Prompt by<br /><span className="text-warning"> @artify.dreams</span></h5>
            <p className="small mt-2">
              <em>"A surreal landscape with floating islands and glowing trees at dusk, vaporwave style"</em>
            </p>
            <p className="small text-muted">
              Generated using <strong>DreamFusion v2.1</strong><br />
              Resolution: 1024x1024
            </p>
          </div>

          <div className="bg-light rounded-4 p-3 d-flex shadow-sm">
            <img
              src="https://images.pexels.com/photos/17485683/pexels-photo-17485683.png"
              alt="Mini Gallery"
              className="rounded-3 me-3"
              style={{ width: '40%', height: 'auto', objectFit: 'cover' }}
            />
            <div>
              <h6 className="fw-bold">Other Variants</h6>
              <p className="small text-muted">
                Variants using alternate seeds and lighting conditions.
              </p>
              <div className="d-flex align-items-center gap-3 small text-muted">
                <span>🎨 4 Styles</span>
                <span>📁 Prompt ID: #A1023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel – Full Image with Tags */}
        <div className="col-md-6 position-relative">
          <img
            src="https://images.pexels.com/photos/18069364/pexels-photo-18069364.png"
            alt="Generated AI Art"
            className="img-fluid rounded-4 shadow"
          />
          <div className="position-absolute top-0 end-0 m-3 bg-warning text-dark rounded-pill px-3 py-1">
            <strong>Featured</strong>
          </div>
          <div className="position-absolute bottom-0 start-0 m-3 bg-light rounded-pill px-3 py-1 small">
            🧠 Model: DreamFusion v2.1
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtPromptCard;
