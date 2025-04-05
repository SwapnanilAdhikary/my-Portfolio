import React, { useState, useEffect } from 'react';

export const HackerTyper: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const sampleCode: string = `function hackThePlanet() {
  const accessGranted = true;
  console.log("Welcome, agent.");
}`;

  useEffect(() => {
    const handleKeyPress = () => {
      setCode((prev) => {
        if (prev.length >= sampleCode.length) return prev;
        return prev + sampleCode[prev.length];
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [sampleCode]);

  return (
    <div className="bg-black/80 border border-green-500 p-4 font-mono text-green-400 h-64 overflow-auto whitespace-pre-wrap">
      {code || "// START TYPING TO 'HACK'..."}
    </div>
  );
};
