import { Image } from "react-bootstrap";

const ThankYou = () => {
  return (
    <div className="text-center">
      <Image src="/img/thankyou/icon-thank-you.svg" fluid />
      <p className="card-header-text mt-4">Thank you!</p>
      <p className="card-header--secondary-text mt-2">
        Thanks for confirming your subscription! we hope you have fun using
        platform. If you ever need support, please fell free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYou;
