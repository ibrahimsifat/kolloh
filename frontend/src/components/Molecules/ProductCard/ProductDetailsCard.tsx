import Button from "@/components/atoms/Button/Button";
import { SectionContainer } from "@/components/atoms/Container";
import { ctaCardData } from "@/utils/data";
import Image from "next/image";
import { MdAddIcCall } from "react-icons/md";
import { SwiperSlide } from "swiper/react";
import UserIntro from "../UserIntro/UserIntro";
import ProductDetailsCarousel from "../carousel/ProductDetailsCarousel";
const ProductDetailsCard = () => {
  return (
    <SectionContainer>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-6 md:col-span-5">
          <div className=" top-20">
            <Image
              width={700}
              height={700}
              src="/images/category.jpg"
              className="rounded-md shadow-md dark:shadow-gray-800"
              alt=""
            />
          </div>
          <div className="mt-8">
            <ProductDetailsCarousel>
              {ctaCardData?.map((category, i) => (
                <SwiperSlide key={i + 1} className="group">
                  <Image
                    width={200}
                    height={200}
                    src="/images/category.jpg"
                    className="rounded-md shadow-md dark:shadow-gray-800"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </ProductDetailsCarousel>
          </div>
        </div>

        <div className="lg:col-span-6 md:col-span-7">
          <div className="">
            <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
              Wolf with Skull Orange Illustration T-shirt Tattoo{" "}
            </h5>

            <div className="mt-3">
              <h6 className="text-lg font-semibold">Current Price:</h6>
              <h6 className="text-2xl  mt-1 text-dark font-bold">
                $450.48 SAR
              </h6>
            </div>

            <div className="mt-6 space-x-2">
              <Button size="xl">
                <MdAddIcCall size={22} /> Connect with Seller
              </Button>
            </div>

            <div
              className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md mt-8"
              id="myTab"
              data-tabs-toggle="#StarterContent"
              role="tablist"
            >
              {" "}
              Details
              <div id="StarterContent" className="mt-6 max-h-96 overflow-auto ">
                <div
                  className=""
                  id="tuesday"
                  role="tabpanel"
                  aria-labelledby="tuesday-tab"
                >
                  <div className="grid grid-cols-1">
                    <p className="text-slate-400 mb-4">
                      Hey guys! New exploration about NFT Marketplace Web
                      Design, this time I`m inspired by one of my favorite NFT
                      website called Superex (with crypto payment)! What do you
                      think?
                    </p>
                    <p className="text-slate-400 mb-4">
                      What does it mean? Biomechanics is the study of the
                      structure, function and motion of the mechanical aspects
                      of biological systems, at any level from whole organisms
                      to organs, cells and cell organelles, using the methods of
                      mechanics. Biomechanics is a branch of biophysics. Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit.
                      Maiores et natus debitis! Illum nihil dicta esse vel in
                      eos necessitatibus commodi, adipisci aut sint sequi
                      voluptatum quam temporibus harum ipsa tempora ipsum sunt
                      cupiditate neque saepe. Alias amet optio nesciunt
                      accusantium saepe ea neque hic aspernatur, explicabo
                      voluptates fugiat libero veniam quidem voluptas, quod sunt
                      aliquid rem aliquam. Laborum, consectetur enim rem maiores
                      eius commodi culpa modi molestias assumenda voluptas iusto
                      itaque consequuntur magnam eaque facilis delectus
                      voluptatem quam dolores dolorem! Temporibus, harum quas.
                      Praesentium, non! Tempora nisi facere veniam libero autem
                      eveniet ad velit. Magni, necessitatibus quia suscipit
                      dignissimos dolores quibusdam ipsa sequi obcaecati quos
                      deserunt amet, laboriosam atque accusantium eveniet optio
                      nisi aut ex eligendi repellat cumque veniam est. Ullam
                      quisquam, repellat facilis itaque sapiente alias obcaecati
                      iste, totam, voluptas inventore modi vitae aut numquam!
                      Esse, cumque. Sit velit quia repellendus harum. Sed
                      repellendus impedit excepturi accusantium facere nemo
                      minus suscipit non incidunt ducimus molestiae aspernatur
                      aperiam, expedita itaque quae! Ratione quo saepe maxime
                      voluptatibus doloribus! Odio libero tempora incidunt,
                      totam illum possimus cum explicabo vero voluptatum? Eaque,
                      minima nostrum nam quo vero voluptas officiis magni
                      commodi cum minus ratione excepturi quibusdam, nemo illum
                      non perferendis possimus deserunt eius explicabo mollitia
                      quaerat. Dicta inventore quo totam iusto rerum, accusamus
                      voluptates sint neque reprehenderit mollitia sed odio
                      sapiente fugiat, nihil laborum, vero dignissimos. Natus
                      quam voluptatibus tenetur nam vitae, ducimus soluta ex,
                      dolorem suscipit explicabo autem cum ad iste hic placeat.
                      Ipsam explicabo, illum veritatis fugit ratione placeat
                      soluta officiis impedit sunt, quasi pariatur nihil
                      laudantium nostrum expedita beatae quam iure voluptatibus
                      ducimus laboriosam. Nemo at tempora corporis sequi
                      cupiditate quis, expedita, dolores odio, assumenda dolorem
                      itaque quam illum adipisci sapiente rerum. Laborum enim,
                      totam reprehenderit sunt repellendus omnis nulla neque?
                      Obcaecati maiores harum voluptatem, nemo temporibus
                      provident ducimus nam aliquam ut deleniti. Accusantium
                      dignissimos, facilis nostrum maxime veritatis totam odit
                      nobis! Beatae doloremque, corrupti reiciendis repellat a
                      voluptatem nobis. Nisi ab unde ipsa commodi accusamus,
                      totam cupiditate? Explicabo cum, sed quam voluptatem
                      dolores laboriosam eum similique quisquam itaque velit
                      quas dolore. Accusamus reprehenderit quos labore non
                      explicabo enim voluptas dolorum sunt omnis nostrum
                      doloremque fuga, culpa dolore facilis, ex libero alias.
                      Eveniet nesciunt inventore, quos blanditiis maiores
                      dolorum sequi quaerat asperiores. Molestiae, nisi. Facere
                      adipisci sequi natus? Eius at officia dolorum soluta
                      ducimus commodi non error deleniti iusto earum. Incidunt
                      voluptatum asperiores aliquid, ipsum ab velit esse id nam
                      praesentium neque debitis, officiis, tempora odio
                      mollitia. Saepe totam blanditiis ut dolorem maxime ipsa
                      alias ab explicabo voluptate veniam officia itaque velit,
                      voluptas assumenda iste pariatur. Magni excepturi corporis
                      quod ex necessitatibus reprehenderit accusamus, quidem non
                      exercitationem, repudiandae fugiat. In sint ratione saepe
                      ipsam nihil illum provident sunt? Suscipit, iusto quasi
                      fuga nihil magnam veritatis porro consequatur aperiam odio
                      praesentium impedit optio illum dolorum reiciendis
                      assumenda possimus magni earum alias eaque vero
                      repellendus eveniet saepe distinctio culpa. Laborum, illum
                      quibusdam ullam numquam praesentium minus non perferendis
                      error culpa quae alias eaque, temporibus labore aspernatur
                      ipsa? Illum tempore saepe laudantium vel libero, ut
                      veritatis odio qui alias aliquid corrupti beatae. Nisi,
                      sint doloremque nihil maiores nesciunt rem aut iste.
                      Voluptatum maxime ex sapiente, quo, corrupti quaerat,
                      numquam provident architecto dolore saepe reiciendis
                      velit! Cumque qui mollitia ex, repudiandae atque, porro
                      enim quasi molestiae debitis inventore blanditiis error
                      voluptate aliquam natus? Alias hic eius suscipit tempora
                      beatae, deserunt qui eum animi asperiores corrupti rem
                      nihil quidem amet rerum magnam officia mollitia doloremque
                      accusamus sit enim exercitationem laborum similique in!
                      Fuga perspiciatis recusandae accusamus velit, numquam
                      laborum maiores non, magnam sequi, esse modi. Et beatae
                      amet laudantium repellat consequuntur perferendis cum est
                      animi tempora, reiciendis fuga dicta mollitia, nostrum
                      unde nesciunt aperiam temporibus? Molestias, corporis
                      recusandae expedita fuga quibusdam, nobis vitae explicabo
                      ipsum qui temporibus dolor. Voluptatibus alias eos nostrum
                      saepe delectus totam, repellendus molestias natus,
                      repudiandae suscipit autem minus praesentium doloribus
                      tenetur. Magni rem explicabo officia non voluptatum in,
                      similique id at iusto sapiente deleniti asperiores beatae
                      maiores, quaerat necessitatibus doloribus voluptatibus
                      totam dolorum ipsa dolor dicta ut quas? Neque aliquam
                      quibusdam libero amet vitae culpa explicabo dicta ab eum
                      dolorum tempora nisi molestiae excepturi est laboriosam
                      iure facilis reiciendis animi, provident fuga natus
                      deleniti molestias ex corporis. Deserunt ad dolorum
                      reprehenderit incidunt quia fuga enim tempore, dolor
                      laborum quod velit. Architecto quia magni neque enim
                      dignissimos voluptatibus, eum tempora dolores, aperiam
                      odio nisi possimus quidem ducimus omnis praesentium totam
                      laudantium nostrum ab sint quos? Totam deserunt molestiae
                      autem nisi voluptates maiores eos ipsam enim placeat sunt
                      assumenda, fuga doloremque distinctio, dolore facilis
                      cupiditate deleniti veritatis sit! Laboriosam fuga
                      inventore eaque quam illum, voluptate ipsum corrupti
                      commodi? Officia enim suscipit sit tenetur! Labore officia
                      debitis culpa facere corrupti dolores beatae ex minima?
                      Sapiente, dolorem vitae nostrum quod illo aperiam quo
                      voluptatum, similique animi nam rem voluptate. Expedita
                      cum facere sed distinctio minus eveniet sint, numquam
                      voluptate perferendis reiciendis necessitatibus,
                      praesentium soluta deserunt nostrum, vero eum. Ut ullam id
                      voluptas nulla inventore illum quo eius quis velit
                      laudantium voluptatum asperiores, mollitia voluptates quia
                      delectus deserunt, omnis vitae ea! Ad cum nisi qui
                      architecto obcaecati, ex id quae, corrupti saepe a numquam
                      quasi magni excepturi, aliquam adipisci soluta eos?
                      Delectus magnam nostrum aspernatur laboriosam sed
                      consequuntur esse dicta quae similique, pariatur quod
                      odio, repellat, maiores dolores exercitationem. Quae sint
                      laudantium placeat, pariatur animi est unde enim ut illo
                      iusto commodi, perferendis ad minus id. Veritatis pariatur
                      nobis dolorum eius cupiditate fuga quidem fugit neque.
                      Fugiat deleniti minus sequi eum laborum quam quo nemo! Sed
                      libero provident assumenda modi dolor sunt, consequuntur
                      sapiente cupiditate hic voluptatibus iure temporibus,
                      fugit asperiores omnis, minima quo porro magni in aut
                      beatae? Dolore officia unde quaerat placeat amet veniam
                      atque aliquam veritatis reprehenderit repellendus quidem
                      et quibusdam harum, iusto eos molestias minima quae est
                      praesentium doloribus suscipit mollitia corrupti, culpa
                      numquam? Obcaecati enim quam dignissimos culpa repellat
                      libero vitae explicabo, fuga earum nisi iste doloribus sit
                      id recusandae animi optio error vel, commodi accusamus
                      deleniti eaque repellendus. Hic asperiores id magni
                      quaerat vel aut ab exercitationem nihil nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <UserIntro />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default ProductDetailsCard;
