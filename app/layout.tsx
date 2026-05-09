export const metadata = {
  title: "Infra Intelligence Tool",
  description: "Internal Troubleshooting System"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>Infra Intelligence Dashboard</h1>
        {children}
      </body>
    </html>
  );
}
