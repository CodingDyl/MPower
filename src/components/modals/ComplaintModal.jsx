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

function ComplaintModal({ opened, close }) {

    const handleAttachmentChange = (file) => {
        form.setValue("attachment", file);
    };

    const formRef = useRef();
    const form = useForm({
        initialValues: {
            name: "",
            emailAddress: "",
            attachment: "",
        },

        validate: {
            emailAddress: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
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
                    attachment: form.attachment,
                },
                'i_IFgvR2F8kYMIPmq'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("We Apologise for the issue you are having. We will look into it and get back to you as soon as possible.");

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
                title="Complaints"
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
                        Please let us know how we can help you
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

                                <Dropzone
                                    required
                                    value={form.values.attatchment}
                                    onDrop={handleAttachmentChange}
                                    onReject={(files) => console.log('rejected files', files)}
                                    maxSize={10 * 1024 ** 2}
                                    accept={[MIME_TYPES.pdf]}
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
                                                Click on me or Drag and Upload the completed Complaints and Appeals Form
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
                                {loading ? "Reporting Incident..." : "Report Incident"}
                            </Button>
                            <a href="#accredidation" onClick={close}>
                                <Button
                                    radius="xl"
                                    sx={{ backgroundColor: "#334367 !important", color: "#f3f3f3", cursor: "pointer" }}>
                                    Get Complaints Form
                                </Button></a>

                        </Group>
                    </form>
                </Paper>
            </Modal>
        </>
    );
}

export default ComplaintModal;