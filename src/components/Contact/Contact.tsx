import Script from "next/script";

export default function Contact() {
  return (
    <div>
      <Script src="https://sdk.form.run/js/v2/embed.js" />
      <div
        className="formrun-embed"
        data-formrun-form="@jukid--RfSPTrhTmnUCm48aVxMO"
        data-formrun-redirect="true">
      </div>
    </div>
  );
}