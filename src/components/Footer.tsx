function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Makwaje, All rights reserved.
      </small>
      <p className="text-xs leading-4">
        <span className="font-extrabold text-black/75 dark:text-white/60">
          About this website:{" "}
        </span>{" "}
        built with React.js & Next.js (App router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend and Vercel Hosting.
      </p>
    </footer>
  );
}
export default Footer;
