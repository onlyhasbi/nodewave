import React, { useId } from 'react';
import Title from './Title';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonies = [
  {
    comment: `Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang
  paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu
  udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih
  Nodewave.`,
    user: 'Ahmad Prasetyo',
  },
  {
    comment: `Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave,
    ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami
    tinggal cerita aja lewat zoom maunya buat website seperti apa,
    langsung dibuatin dengan cepat sama Nodewave.`,
    user: 'Laras Ratnadewi',
  },
  {
    comment: `Yang paling keren sih source codenya sekalian dikasih,
    pas pula bisa pakai Flutter, jadi gw ama cofounder bisa
    develop lagi fitur2 baru untuk startup gw.
    Thanks a lot Nodewave supportnya!!`,
    user: 'Yusuf Uwais',
  },
  {
    comment: `Yang paling keren sih source codenya sekalian dikasih,
    pas pula bisa pakai Flutter, jadi gw ama cofounder bisa
    develop lagi fitur2 baru untuk startup gw.
    Thanks a lot Nodewave supportnya!!`,
    user: 'Yusuf Uwais',
  },
  {
    comment: `Yang paling keren sih source codenya sekalian dikasih,
    pas pula bisa pakai Flutter, jadi gw ama cofounder bisa
    develop lagi fitur2 baru untuk startup gw.
    Thanks a lot Nodewave supportnya!!`,
    user: 'Yusuf Uwais',
  },
];

function Testimoni() {
  const id = useId();

  return (
    <section className="container">
      <Title className="!text-2xl mb-6 !text-left">Testimony</Title>
      <Swiper
        spaceBetween={25}
        slidesPerView={3}
        className="w-[91.25rem] flex flex-nowrap gap-[1.875rem] cursor-pointer"
      >
        {testimonies.map((testimoni, index) => (
          <SwiperSlide className="!w-[20rem] xl:!w-[25rem]" key={id + index}>
            <Card
              data-aos="fade-left"
              data-aos-duration={index * 800}
              className="flex-1 xl:min-h-[12rem] min-h-[13.5rem] flex flex-col justify-between !bg-white tex-sm font-medium space-y-3.5 py-[.875rem] px-4 rounded-[.375rem] w-full"
            >
              <p className="block text-text_secondary text-[.875rem]">
                {testimoni.comment}
              </p>
              <span className="block text-primary ">{testimoni.user}</span>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimoni;
