import { Socials } from "@/components/socials";
import { AdditionalInfo } from "@/components/additional-info";

export const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-6 h2 uppercase font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/70">
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
        </div>
        <form className="my-14 w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button type="submit" className="btn btn-accent min-w-40">
            Join
          </button>
        </form>
        <AdditionalInfo />
        <Socials />
      </div>
      <p className="py-10 border-t border-t-white/10 text-center text-sm text-white/60">
        Copyright &copy; Photoland 2025. All rights reserved
      </p>
    </footer>
  );
};
