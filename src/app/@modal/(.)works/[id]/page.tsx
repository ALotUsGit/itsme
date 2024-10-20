import Modal from "@/components/Modal";
import WorkDetail from "@/components/WorkDetail";

type Props = {
  params: { id: string };
};

const ModalPage = ({ params: { id } }: Props) => {
  return (
    <Modal>
      <WorkDetail id={id} />
    </Modal>
  );
};
export default ModalPage;
