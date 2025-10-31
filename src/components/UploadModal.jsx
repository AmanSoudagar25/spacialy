import React, { useEffect, useRef, useState } from 'react';

const UploadModal = ({ open, onClose, onFileSelected, onContinue }) => {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);
  const [location, setLocation] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setPreview(null);
      setLocation('');
      setDragOver(false);
    }
  }, [open]);

  if (!open) return null;

  const handleFiles = (files) => {
    const file = files && files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    if (onFileSelected) onFileSelected(file, url);
  };

  const canContinue = Boolean(preview) && location.trim().length > 0;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'grid', placeItems: 'center', background: 'rgba(2,6,12,0.5)' }} onClick={onClose}>
      <div className="card" style={{ width: 'min(680px, 92vw)', maxWidth: 680, padding: 20 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontWeight: 800 }}>Upload Your Room Photo</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 0, cursor: 'pointer', fontSize: 18 }}>✕</button>
        </div>

        <div className="subtle" style={{ marginBottom: 12 }}>
          For best dimension results, please place a standard A4 sheet of paper flat on the floor before taking your photo.
        </div>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
          className="center"
          style={{
            border: '2px dashed rgba(15,23,42,0.15)',
            borderRadius: 12,
            padding: 28,
            background: dragOver ? 'rgba(14,124,134,0.06)' : 'transparent',
            minHeight: 180,
            textAlign: 'center'
          }}
        >
          {preview ? (
            <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: 280, objectFit: 'contain', borderRadius: 10 }} />
          ) : (
            <div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>Drag & drop a photo here</div>
              <div className="subtle" style={{ marginBottom: 14 }}>or</div>
              <button className="button-primary" onClick={() => inputRef.current?.click()}>Choose a file</button>
              <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => handleFiles(e.target.files)} />
            </div>
          )}
        </div>

        <div style={{ marginTop: 14 }}>
          <label htmlFor="location" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Your Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Bangalore, India"
            style={{ width: '100%', padding: '12px 12px', borderRadius: 10, border: '1px solid rgba(15,23,42,0.15)', outline: 'none' }}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 14 }}>
          <button onClick={onClose} style={{ background: 'transparent', border: 0, padding: '10px 14px', cursor: 'pointer' }}>Cancel</button>
          <button className="button-primary" disabled={!canContinue} onClick={() => { if (onContinue) onContinue({ location: location.trim() }); onClose(); }}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
