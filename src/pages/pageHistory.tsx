import Drawer from "@/components/Drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PageHistory() {
  return (
    <>
      <Drawer>
        <ScrollArea>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p>
              Welcome to your dashboard. Here you can find a quick overview of
              your recent activities and shortcuts to important sections.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Recent Activities</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Completed a task: "Update user profile"</li>
                <li>Added a new project: "Redesign landing page"</li>
                <li>Reviewed team member's code changes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Upcoming Deadlines</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-medium">Project Launch</h3>
                  <p>Due: October 25, 2024</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-medium">Client Presentation</h3>
                  <p>Due: November 5, 2024</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Quick Links</h2>
              <nav className="space-y-2">
                <a
                  href="/profile"
                  className="block text-blue-500 hover:underline"
                >
                  Edit Profile
                </a>
                <a
                  href="/settings"
                  className="block text-blue-500 hover:underline"
                >
                  Account Settings
                </a>
                <a
                  href="/projects"
                  className="block text-blue-500 hover:underline"
                >
                  View Projects
                </a>
              </nav>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Quick Links</h2>
              <nav className="space-y-2">
                <a
                  href="/profile"
                  className="block text-blue-500 hover:underline"
                >
                  Edit Profile
                </a>
                <a
                  href="/settings"
                  className="block text-blue-500 hover:underline"
                >
                  Account Settings
                </a>
                <a
                  href="/projects"
                  className="block text-blue-500 hover:underline"
                >
                  View Projects
                </a>
              </nav>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Quick Links</h2>
              <nav className="space-y-2">
                <a
                  href="/profile"
                  className="block text-blue-500 hover:underline"
                >
                  Edit Profile
                </a>
                <a
                  href="/settings"
                  className="block text-blue-500 hover:underline"
                >
                  Account Settings
                </a>
                <a
                  href="/projects"
                  className="block text-blue-500 hover:underline"
                >
                  View Projects
                </a>
              </nav>
            </section>
          </div>
        </ScrollArea>
      </Drawer>
    </>
  );
}
