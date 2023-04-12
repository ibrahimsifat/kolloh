import Button from "@/components/atoms/Button/Button";
import InputArea from "@/components/atoms/form/InputArea";
import Label from "@/components/atoms/form/Label";
import Textarea from "@/components/atoms/form/Textarea";

const CommentForm = () => {
  return (
    <form className="mb-6">
      <div className="md:flex justify-between items-center md:space-x-3">
        <div className="flex-1 my-5">
          <InputArea label="name" name="name" type="text" placeholder="Name:" />
        </div>
        <div className="flex-1 my-5">
          <InputArea
            label="Email"
            name="email"
            type="email"
            placeholder="Email:"
          />
        </div>
      </div>
      <div className="my-5">
        <Label label="Your comment" />
        <Textarea />
      </div>
      <Button>Ask Question</Button>
    </form>
  );
};
export default CommentForm;
