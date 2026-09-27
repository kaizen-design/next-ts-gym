// TODO (Этап 1): типизируй children (React.ReactNode) вместо implicit any
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
