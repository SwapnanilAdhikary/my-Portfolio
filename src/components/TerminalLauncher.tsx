import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';

const prompts = [
  'booting system...',
  'loading AI modules...',
  'establishing neural link...',
  'WELCOME, USER::SWAPNANIL',
];

export const TerminalLauncher: React.FC = () => {
  const [log, setLog] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [animatedPrompt, setAnimatedPrompt] = useState<string>('');
  const promptIndex = useRef(0);
  const charIndex = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typeNextChar = () => {
      const current = prompts[promptIndex.current];
      if (charIndex.current < current.length) {
        setAnimatedPrompt((prev) => prev + current[charIndex.current]);
        charIndex.current++;
      } else {
        setTimeout(() => {
          promptIndex.current = (promptIndex.current + 1) % prompts.length;
          charIndex.current = 0;
          setAnimatedPrompt('');
        }, 1000);
      }
    };

    const interval = setInterval(typeNextChar, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [log]);

  const handleCommand = () => {
    const cmd = input.toLowerCase().trim();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Available: about, projects, snake, doom, tetris';
        break;
      case 'about':
        response =
          'Name: Swapnanil Adhikary\nRole: Developer\nAccess Level: CLASSIFIED';
        break;
      case 'projects':
        response = '>> Project Alpha | Project Beta | Hackathon Tools';
        break;
      case 'snake':
        response = 'Launching Snake... (scroll down)';
        break;
      case 'doom':
        response = 'Doom will rise soon...';
        break;
      case 'tetris':
        response = 'Tetris module activated.';
        break;
      default:
        response = 'Command not recognized. Type "help" for options.';
    }

    setLog((prev) => [...prev, `> ${input}`, response]);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  return (
    <div className="bg-black/80 border border-green-500 p-4 font-mono text-green-400 h-64 overflow-auto" ref={containerRef}>
      <div className="text-green-400 text-sm mb-2">{animatedPrompt}</div>

      {log.map((line, idx) => (
        <div key={idx} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}

      <input
        className="bg-transparent outline-none w-full text-green-300 mt-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="> enter command"
        autoFocus
      />
    </div>
  );
};
