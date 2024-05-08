export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="bg-red">{children}</div>;
}
