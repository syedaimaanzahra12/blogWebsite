
const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-200 fixed bottom-0 w-full p-4">
      <div className="flex justify-center">
        <p>
          &copy; {new Date().getFullYear()} Power of Strangers. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
