import { useFormStatus } from "react-dom";
import { CgSpinner, CgSpinnerTwo, CgSpinnerTwoAlt } from "react-icons/cg";
import { FaPaperPlane } from "react-icons/fa";

function SubmitButton() {
  let { pending } = useFormStatus();

  return (
    <button
      className=" group right-full flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-[1.15] hover:bg-gray-950 focus:scale-110 active:scale-105
      disabled:scale-100 disabled:cursor-not-allowed disabled:bg-opacity-75
      dark:border dark:border-white/20 dark:bg-white dark:bg-opacity-10
      "
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <span className="animate-spin">
          <CgSpinnerTwo size={32} />
        </span>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.25] group-hover:opacity-90" />
        </>
      )}
    </button>
  );
}

export default SubmitButton;
