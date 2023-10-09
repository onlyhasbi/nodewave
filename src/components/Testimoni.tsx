import React, { useId } from 'react';
import Title from './Title';
import Card from './Card';

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
];

function Testimoni() {
  const id = useId();

  return (
    <section className="container">
      <Title className="!text-2xl mb-6 !text-left">Testimony</Title>
      <div className="w-[91.25rem] flex flex-nowrap gap-[1.875rem] cursor-pointer">
        {testimonies.map((testimoni, index) => (
          <Card
            data-aos="fade-left"
            data-aos-duration={index * 800}
            key={id + index}
            className="flex flex-col justify-between !bg-white tex-sm font-medium space-y-3.5 py-[.875rem] px-4 rounded-[.375rem] w-[26.375rem]"
          >
            <p className="block text-text_secondary text-[.875rem]">
              {testimoni.comment}
            </p>
            <span className="block text-primary ">{testimoni.user}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Testimoni;
