function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 py-2 bg-gray-200 flex justify-center items-center font-semibold">
      Copyright @ 2011 - {year} Sabka Bazar Grocery Suplies Pvt Ltd
    </footer>
  );
}

export default Footer;
