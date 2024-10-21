import ButtonCloudinary from "@/components/buttonCloudinary";
import Drawer from "@/components/Drawer";
import { Image } from "@/components/Image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ImageIcon } from "lucide-react";

export default function PageHistory() {
  return (
    <>
      <div className="gradient-decoration">
        <Drawer>
          <div className="p-6 bg-transparent text-white min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Crea tu historia
            </h1>
            <div className="flex items-center justify-center">
              <Card className="w-[26rem]  h-96 md:w-[40rem] bg-transparent border-dashed border-2 border-gray-600  flex flex-col items-center justify-center ">
                <ImageIcon className="w-32 h-32 text-gray-400 mb-4" />

                <p className="text-gray-400 text-lg">Sube tu Imagen</p>
              </Card>
            </div>
            <div className="my-5 text-center">
              <ButtonCloudinary />
            </div>
            <Separator color="white" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tu historia</h2>
                <p className="w-full h-64 bg-transparent text-white border-none resize-none">
                  asdasddasddsa asdasd adasd asdadadadasdadad Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Iure ad repellendus
                  ipsam corporis et illo sit ducimus aspernatur voluptatum
                  expedita fugiat, voluptates unde, libero rem? Consectetur,
                  animi quisquam. Velit, natus? Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Repellendus veritatis nostrum
                  quam doloribus sapiente repudiandae voluptates. Voluptatem,
                  tenetur cupiditate. Saepe laboriosam, illum perferendis nam
                  harum facilis fugiat expedita corporis dolores! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quasi cupiditate
                  placeat perferendis nesciunt temporibus laboriosam tenetur
                  ipsum, sunt ea possimus! Quos nisi ut recusandae minus
                  blanditiis ab voluptatem vitae reprehenderit. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Tempora quas
                  earum eaque id quidem eveniet officiis quaerat sit voluptas,
                  eos vero blanditiis perspiciatis dignissimos sed deleniti
                  minus animi incidunt iusto. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Iste cupiditate labore dolorem
                  asperiores, porro culpa, odio ipsum vel ea quasi qui quas
                  nesciunt sed iusto quia expedita! Odio, tenetur sit! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Magni et
                  nemo, provident fugiat laudantium eveniet adipisci fugit
                  deserunt tempore voluptate soluta atque magnam exercitationem
                  sapiente voluptatem at modi. Laboriosam, eum.
                </p>
              </div>
              <div>
                <Card className="bg-transparent border-none overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="TRAMAFLOW Logo"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">TRAMAFLOW</h3>
                      <p className="text-gray-400">A STORYTELLING WEB APP</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Image />
          </div>
        </Drawer>
      </div>
    </>
  );
}
