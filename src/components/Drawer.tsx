import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Drawer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex h-screen ">
      <div className="w-64 flex-shrink-0 p-5 mt-10  ">
        <Card className="h-[80vh] flex flex-col shadow-xl border-none bg-[#252527]">
          <CardHeader className="flex-shrink-0">
            <CardTitle>Floating Drawer</CardTitle>
          </CardHeader>
          <ScrollArea className="flex-grow">
            <CardContent>
              <nav className="space-y-2">
                <a href="#" className="block hover:underline">
                  Home
                </a>
                <a href="#" className="block hover:underline">
                  About
                </a>
                <a href="#" className="block hover:underline">
                  Services
                </a>
                <a href="#" className="block hover:underline">
                  Contact
                </a>
              </nav>
              <div className="mt-4 space-y-4">
                <p>This is a floating drawer that looks like a card.</p>
                <p>
                  It floats over the background without being attached to the
                  edges.
                </p>
                <p>
                  You can add any content here, such as navigation links,
                  settings, or other information.
                </p>
              </div>
            </CardContent>
          </ScrollArea>
        </Card>
      </div>
      <main className="flex-1 overflow-y-auto pt-10">{children}</main>
    </div>
  );
};

export default Drawer;
