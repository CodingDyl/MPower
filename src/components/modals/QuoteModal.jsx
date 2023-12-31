import { useForm } from "@mantine/form";
import {
    TextInput,
    Text,
    Paper,
    Group,
    Button,
    Stack,
    Modal, rem,
} from "@mantine/core";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {Dropzone, MIME_TYPES} from "@mantine/dropzone";
import {IconFileImport, IconUpload, IconX} from "@tabler/icons-react";

function QuoteModal({ opened, close }) {
    const quoteTypeOptions = [
        'BEE Verification',
        'Consultancy',
        'Training',
        'Managed Procurement',
        'Software Packages',
        'Subscription Packages'
    ]

    const handleAttachmentChange = (file) => {
        form.setValue("attachment", file);
    };

    const formRef = useRef();
    const form = useForm({
        initialValues: {
            name: "",
            emailAddress: "",
            quoteType: "",
            attachment: "",
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
                'service_9pvw52e',
                'template_hmdileq',
                {
                    from_name: form.name,
                    to_name: "mPowerRatings",
                    from_email: form.email,
                    to_email: "info@mpowerratings.co.za",
                    attachment: form.attachment,
                },
                'Oey1QJ3g-VzBNrF_V'
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

                                    <Dropzone
                                        required
                                        value={form.values.attatchment}
                                        onDrop={handleAttachmentChange}
                                        onReject={(files) => console.log('rejected files', files)}
                                        maxSize={10 * 1024 ** 2}
                                        accept={[MIME_TYPES.xls]}
                                        radius="md"
                                    >
                                        <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                                            <Dropzone.Accept>
                                                <IconUpload
                                                    size="2.2rem"
                                                    stroke={1.5}
                                                    color="green"
                                                />
                                            </Dropzone.Accept>
                                            <Dropzone.Reject>
                                                <IconX
                                                    size="2.2rem"
                                                    stroke={1.5}
                                                    color="red"
                                                />
                                            </Dropzone.Reject>
                                            <Dropzone.Idle>
                                                <IconFileImport size="3.2rem" stroke={1.5} />
                                            </Dropzone.Idle>

                                            <div>
                                                <Text size="lg" className="text-center p-2" inline>
                                                    Click on me or Drag and Upload the completed Company Information Form
                                                </Text>
                                            </div>
                                        </Group>
                                    </Dropzone>

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
                            <a href="#forms" onClick={close}>
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