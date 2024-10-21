import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const Drawer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex h-screen">
      <div className="w-64 flex-shrink-0 p-5 mt-16 hidden lg:block">
        <Card className="h-[80vh] flex flex-col shadow-xl border-none bg-[#252527] text-white">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl underline-offset-8">
              Settings
            </CardTitle>
          </CardHeader>
          <ScrollArea className="flex-grow">
            <CardContent>
              <div className="mt-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Zombie</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Vampiro</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Licántropo</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Licántropo</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Licántropo</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Licántropo</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Licántropo</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Licántropo</span>
                    <Switch />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="prompt"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Prompt:
                  </label>
                  <textarea
                    id="prompt"
                    name="prompt"
                    rows={3}
                    className="mt-1 block w-full p-2 rounded-md bg-[#1e1e1f] text-white border-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Escribe tu prompt aquí..."
                  />
                </div>
              </div>
            </CardContent>
          </ScrollArea>
        </Card>
      </div>
      <main className="flex-1 pt-10">{children}</main>
    </div>
  );
};

export default Drawer;
