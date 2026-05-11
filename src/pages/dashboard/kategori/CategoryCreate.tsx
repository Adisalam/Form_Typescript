import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { useForm } from "react-hook-form";

//definisikan field yang ada pada form tambah kategori event
type FormData = {
  nama: string;
};

//definisikan validasi untuk field nama kategori event
const schema = z.object({
  nama: z.string().min(1, "Nama kategori harus diisi"),
});

export default function CategoryCreate() {
  //registrasi fungsi zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Kategori Event</h1>
      <p>Form untuk menambahkan kategori event baru.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nama Kategori"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />

        <Button label="Simpan" variant="primary" />
      </form>
    </div>
  );
}