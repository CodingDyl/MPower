import { useForm } from "@mantine/form";
import {
    TextInput,
    Textarea,
    Text,
    Paper,
    Group,
    Button,
    Stack,
    Select,
    Modal,
} from "@mantine/core";

function QuoteModal({ opened, close }) {
    const quoteTypeOptions = [
        'BEE Verification',
        'Consultancy',
        'Training',
        'Managed Procurement',
        'Software Packages',
        'Subscription Packages'
    ]
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

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Quotes"
                styles={{
                    body: { backgroundColor: "#555555" },
                    header: { backgroundColor: "#555555", color: "#039BE5" },
                    close: {
                        color: "#039BE5",
                        "&:hover": { background: "#039BE5", color: "#555555" },
                    },
                    overlay: { backdropFilter: "blur(5px)" },
                }}
            >
                <Paper radius="md" p="xl" withBorder>
                    <Text size="lg" weight={500} mb={15} fw={700}>
                        Welcome to mPower Ratings
                    </Text>

                    <form
                        onSubmit={(event) => {
                            event.preventDefault(); // prevent default form submission behavior
                        }}
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

                                    <TextInput
                                        required
                                        label="Contact Number"
                                        placeholder="Your contact number"
                                        value={form.values.contactNumber}
                                        onChange={(event) =>
                                            form.setFieldValue("contact", event.currentTarget.value)
                                        }
                                        radius="md"
                                    />

                                    <TextInput
                                        required
                                        label="Company"
                                        placeholder="Your company name"
                                        value={form.values.company}
                                        onChange={(event) =>
                                            form.setFieldValue("company", event.currentTarget.value)
                                        }
                                        radius="md"
                                    />

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

                                    <Textarea
                                        rows={7}
                                        name='message'
                                        value={form.values.message}
                                        placeholder='Your question or comment here...'
                                        className='bg-transparent placeholder:text-primary text-white rounded-lg outline-none border-none font-medium'
                                        onChange={(event) => {
                                            form.setFieldValue("message", event.currentTarget.value);
                                        }}
                                        radius="md"
                                    />


                                </>

                        </Stack>

                        <Group position="apart" mt="xl">
                            <Button
                                type="submit"
                                radius="xl"
                                sx={{ backgroundColor: "#555555 !important", color: "#039BE5", cursor: "pointer" }}
                            >
                                Get Quote
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Modal>
        </>
    );
}

export default QuoteModal;