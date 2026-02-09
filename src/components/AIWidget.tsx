import { studioConfig } from "@/lib/studioConfig";

const WhatsAppButton = () => {
  const phone = studioConfig.TELEFONO.replace(/[\s+]/g, "");
  const url = `https://wa.me/${phone}`;

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.89 15.89 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-2.282 2.108-3.14 2.162-.786.05-1.51.374-5.088-1.058-4.318-1.728-7.06-6.13-7.274-6.416-.21-.286-1.72-2.286-1.72-4.362 0-2.076 1.088-3.098 1.474-3.52.39-.424.846-.528 1.128-.528.286 0 .57.002.82.016.264.012.618-.1.966.738.39.852 1.288 3.146 1.4 3.374.112.228.186.494.038.78-.15.286-.224.464-.44.714-.214.248-.452.554-.644.744-.214.214-.438.446-.188.876.25.428 1.11 1.834 2.384 2.972 1.636 1.462 3.016 1.916 3.444 2.13.428.214.678.178.926-.108.25-.286 1.072-1.25 1.358-1.678.286-.428.57-.356.962-.214.39.144 2.484 1.172 2.912 1.386.428.214.714.322.82.494.112.178.112 1.012-.278 2.098z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
