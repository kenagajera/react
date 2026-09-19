import JsBarcode from "jsbarcode";
import './cssfile.css';
import { useEffect, useRef, useState } from "react";

function Barcode() {
  const [Barcode, setBarcode] = useState('');
  const [submit, setsubmit] = useState('');
  const [click, setclick] = useState('');

  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [color, setColor] = useState("#000000");

  const Barcoderef = useRef(null);

  useEffect(() => {
    if (click === "BARCODE" && Barcode) {
      JsBarcode(Barcoderef.current, Barcode, {
        displayValue: true,
        format: "CODE128",
        lineColor: color,
        height: parseInt(height),
        width: parseFloat(width)
      });
    }
  }, [Barcode, click, height, width, color]);

  const handleBarcodeclick = () => setsubmit("BARCODE");

  const handleclick = () => setclick(submit);

  const downloadBarcode = () => {
    const svg = Barcoderef.current;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Barcode.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <div className="generate">Generate Barcode</div>
      <div className="nav">
        <button className="Barcode" onClick={handleBarcodeclick}>BARCODE</button>
      </div>

      {submit === "BARCODE" && (
        <div className="design">
          <div className="generate">Barcode Settings</div>
          <input
            type="text"
            placeholder="Enter barcode text"
            value={Barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Width"
            value={width}
            step="0.1"
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <br />
          <button onClick={handleclick}>Generate</button>

          {click === "BARCODE" && Barcode && (
            <div className="barcode">
              <svg ref={Barcoderef}></svg>
              <br />
              <button onClick={downloadBarcode}>Download Barcode</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Barcode;
