import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        {children}
      </div>
    </div>
  );
}
