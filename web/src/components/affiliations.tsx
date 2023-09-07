import Image from "next/image";

export function Affiliations() {
  return (
    <div className="w-full py-14">
      <div className="max-w-5xl mx-auto flex flex-row justify-center items-center gap-10">
        <Image
          src="/images/footer/affiliations/KO_Logo_Small.jpg"
          width={125}
          height={400}
          alt="Banner-logo-5"
        />
        <Image
          src="/images/footer/affiliations/NKA_Logo_Small.jpg"
          width={50}
          height={400}
          alt="Banner-logo-5"
        />
        <Image
          src="/images/footer/affiliations/OKF_logo_footer.png"
          width={100}
          height={400}
          alt="Banner-logo-5"
        />
        <Image
          src="/images/footer/affiliations/sportalliance_75.jpg"
          width={75}
          height={400}
          alt="Banner-logo-5"
        />
        <Image
          src="/images/footer/affiliations/sportcanada_54.jpg"
          width={150}
          height={400}
          alt="Banner-logo-5"
        />
      </div>
    </div>
  );
}
