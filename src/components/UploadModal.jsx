import React, { useEffect, useRef, useState } from 'react';

const UploadModal = ({ open, onClose, onFileSelected }) => {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleFiles = (files) => {
    const file = files && files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    if (onFileSelected) onFileSelected(file);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'grid', placeItems: 'center', background: 'rgba(2,6,12,0.5)' }} onClick={onClose}>
      <div className="card" style={{ width: 'min(680px, 92vw)', maxWidth: 680, padding: 20 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontWeight: 800 }}>Upload Your Room Photo</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 0, cursor: 'pointer', fontSize: 18 }}>✕</button>
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

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 14 }}>
          <button onClick={onClose} style={{ background: 'transparent', border: 0, padding: '10px 14px', cursor: 'pointer' }}>Cancel</button>
          <button className="button-primary" onClick={onClose}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
