import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../components/schemas/loginSchemas";
import { Button } from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";
import { PasswordInput } from "../components/atoms/PasswordInput";
import { Select } from "../components/atoms/Select";
import { TextArea } from "../components/atoms/TextArea";
import * as z from "zod";
type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        console.log("Submitting...", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Anda Berhasil Mendaftar! Cek Email Anda Untuk Verifikasi");
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">
                <h1 className="text-2xl font-bold text-center mb-6">Daftar Event</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input
                        label="Nama"
                        placeholder="Nama anda"
                        {...register("username")}
                        error={errors.username?.message}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="Email@gmail.com"
                        {...register("email")}
                        error={errors.email?.message}
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="••••••••"
                        {...register("password")}
                        error={errors.password?.message}
                    />

                    <Select
                        label="Kategori Event"
                        {...register("category")}
                        error={errors.category?.message}
                        options={[
                            { value: "Invofest", label: "Infovest" },
                            { value: "Inforsary", label: "Infrosary" },
                            { value: "Futsal", label: "Futsal" },
                        ]}
                    />

                    <TextArea
                        label="Bio Singkat"
                        placeholder="Ceritakan sedikit tentang dirimu..."
                        {...register("bio")}
                        error={errors.bio?.message}
                    />

                    <Button type="submit" isLoading={isSubmitting}>
                        Daftar
                    </Button>
                </form>
            </div>
        </div>
    );
}