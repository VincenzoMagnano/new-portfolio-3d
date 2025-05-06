interface ButtonProps {
  text: string;
  className?: string; // Reso opzionale con ?
  id?: string; // Aggiunto id come prop opzionale
  href?: string; // Aggiunto href opzionale per il link
}

const Button = ({ text, className = "", id, href = "#" }: ButtonProps) => {
  return (
    <a href={href} id={id} className={`${className} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
