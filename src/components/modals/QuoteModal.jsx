import { useForm } from "@mantine/form";
import {
    TextInput,
    Textarea,
    Text,
    Paper,
    Group,
    Button,
    Stack,
    Modal,
} from "@mantine/core";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import DropzoneButton from "./DropzoneButton.jsx";

function QuoteModal({ opened, close }) {
    const quoteTypeOptions = [
        'BEE Verification',
        'Consultancy',
        'Training',
        'Managed Procurement',
        'Software Packages',
        'Subscription Packages'
    ]

    const formRef = useRef();
    const form = useForm({
        initialValues: {
            name: "",
            company: "",
            emailAddress: "",
            contactNumber: "",
            quoteType: "",
            message: "",
        },

        validate: {
            emailAddress: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            contactNumber: (val) =>
                val.length <= 10
                    ? "Please Ensure a correct number has been provided"
                    : null,
        },
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_8ug5t08',
                'template_89r4q4d',
                {
                    from_name: form.name,
                    to_name: "mPowerRatings",
                    from_email: form.email,
                    to_email: "info@mpowerratings.co.za",
                    message: form.message,
                },
                'i_IFgvR2F8kYMIPmq'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. We will get back to you as soon as possible.");

                    form.reset();
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };


    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Quotes"
                styles={{
                    body: { backgroundColor: "#334367" },
                    header: { backgroundColor: "#334367", color: "#f3f3f3" },
                    close: {
                        color: "#f3f3f3",
                        "&:hover": { background: "#f3f3f3", color: "#334367" },
                    },
                    overlay: { backdropFilter: "blur(5px)" },
                }}
            >
                <Paper radius="md" p="xl" withBorder>
                    <Text size="lg" weight={500} mb={15} fw={700}>
                        Enter your quote request details below to be contacted by mPowerRatings.
                    </Text>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <Stack>

                                <>
                                    <div className="flex justify-around gap-2">
                                        <TextInput
                                            label="Name"
                                            placeholder="Your name"
                                            value={form.values.name}
                                            onChange={(event) =>
                                                form.setFieldValue("name", event.currentTarget.value)
                                            }
                                            radius="md"
                                        />

                                        <TextInput
                                            required
                                            label="Email Address"
                                            placeholder="Your email address"
                                            value={form.values.emailAddress}
                                            onChange={(event) =>
                                                form.setFieldValue(
                                                    "emailAddress",
                                                    event.currentTarget.value
                                                )
                                            }
                                            radius="md"
                                        />
                                    </div>

                                    <select
                                        required
                                        label="Quote type"
                                        value={form.values.quoteType}
                                        onChange={(event) =>
                                            form.setFieldValue("quoteType", event.currentTarget.value)
                                        }
                                        className="rounded-md p-2 bg-transparent border-solid border-[1px] border-primary"
                                    >
                                        <option value="" disabled>
                                            Select quote type
                                        </option>
                                        {quoteTypeOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    <DropzoneButton />

                                </>

                        </Stack>

                        <Group position="apart" mt="xl">
                            <Button
                                type="submit"
                                radius="xl"
                                sx={{ backgroundColor: "#334367 !important", color: "#f3f3f3", cursor: "pointer" }}
                            >
                                {loading ? "Requesting Quote..." : "Get Quote"}
                            </Button>
                            <a href="#accredidation" onClick={close}>
                            <Button
                                radius="xl"
                                sx={{ backgroundColor: "#334367 !important", color: "#f3f3f3", cursor: "pointer" }}>
                                Get Company Info Form
                            </Button></a>

                        </Group>
                    </form>
                </Paper>
            </Modal>
        </>
    );
}

export default QuoteModal;