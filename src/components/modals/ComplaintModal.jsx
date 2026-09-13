import { useForm } from "@mantine/form";
import {
  TextInput,
  Text,
  Paper,
  Group,
  Button,
  Stack,
  Modal,
  rem,
} from "@mantine/core";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconFileImport, IconUpload, IconX } from "@tabler/icons-react";

const modalStyles = {
  content: {
    background:
      "linear-gradient(160deg, rgba(26,45,82,0.98) 0%, rgba(12,18,32,0.98) 100%)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: rem(20),
    boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
  },
  header: {
    background: "transparent",
    color: "#f4f7ff",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    paddingBottom: rem(12),
  },
  title: {
    color: "#f4f7ff",
    fontWeight: 700,
    fontSize: rem(18),
    letterSpacing: "-0.01em",
  },
  body: {
    background: "transparent",
    color: "#d5ddf0",
  },
  close: {
    color: "rgba(244,247,255,0.85)",
    "&:hover": {
      background: "rgba(255,255,255,0.12)",
      color: "#fff",
    },
  },
  overlay: {
    backgroundColor: "rgba(5,8,16,0.72)",
    backdropFilter: "blur(8px)",
  },
};

const inputStyles = {
  label: { color: "rgba(232,238,252,0.9)", fontWeight: 600, marginBottom: 6 },
  input: {
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "#f4f7ff",
    "&::placeholder": { color: "rgba(213,221,240,0.45)" },
    "&:focus": {
      borderColor: "rgba(200,149,47,0.7)",
      backgroundColor: "rgba(255,255,255,0.09)",
    },
  },
};

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
        "service_8ug5t08",
        "template_89r4q4d",
        {
          from_name: form.name,
          to_name: "mPowerRatings",
          from_email: form.email,
          to_email: "info@mpowerratings.co.za",
          attachment: form.attachment,
        },
        "i_IFgvR2F8kYMIPmq"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "We apologise for the issue you are having. We will look into it and get back to you as soon as possible."
          );
          form.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Complaints"
      centered
      radius="lg"
      size="lg"
      styles={modalStyles}
    >
      <Paper
        radius="lg"
        p="lg"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <Text size="sm" mb={18} style={{ color: "rgba(213,221,240,0.88)", lineHeight: 1.6 }}>
          Tell us what went wrong. Attach the completed complaints form and we&apos;ll
          follow up with a human.
        </Text>

        <form ref={formRef} onSubmit={handleSubmit}>
          <Stack gap="md">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
              <TextInput
                className="flex-1"
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="xl"
                styles={inputStyles}
              />
              <TextInput
                className="flex-1"
                required
                label="Email"
                placeholder="you@company.co.za"
                value={form.values.emailAddress}
                onChange={(event) =>
                  form.setFieldValue("emailAddress", event.currentTarget.value)
                }
                radius="xl"
                styles={inputStyles}
              />
            </div>

            <Dropzone
              required
              value={form.values.attatchment}
              onDrop={handleAttachmentChange}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={10 * 1024 ** 2}
              accept={[MIME_TYPES.pdf]}
              radius="lg"
              styles={{
                root: {
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px dashed rgba(255,255,255,0.28)",
                  color: "#d5ddf0",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderColor: "rgba(200,149,47,0.55)",
                  },
                },
              }}
            >
              <Group
                justify="center"
                gap="xl"
                style={{ minHeight: rem(160), pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <IconUpload size="2.2rem" stroke={1.5} color="#86efac" />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX size="2.2rem" stroke={1.5} color="#fca5a5" />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconFileImport
                    size="2.6rem"
                    stroke={1.5}
                    color="rgba(232,238,252,0.75)"
                  />
                </Dropzone.Idle>
                <div>
                  <Text size="sm" ta="center" style={{ color: "#e8eefc" }}>
                    Drop your Complaints and Appeals Form here, or click to upload
                  </Text>
                  <Text size="xs" ta="center" mt={6} style={{ color: "rgba(213,221,240,0.55)" }}>
                    PDF, up to 10MB
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </Stack>

          <Group justify="space-between" mt="xl" gap="sm" wrap="wrap">
            <Button
              type="submit"
              radius="xl"
              loading={loading}
              styles={{
                root: {
                  backgroundColor: "#ffffff",
                  color: "#1a2d52",
                  fontWeight: 600,
                  height: rem(44),
                  paddingInline: rem(22),
                  "&:hover": { backgroundColor: "#f4f7ff" },
                },
              }}
            >
              {loading ? "Reporting…" : "Report incident"}
            </Button>
            <a href="#forms" onClick={close}>
              <Button
                radius="xl"
                variant="outline"
                styles={{
                  root: {
                    borderColor: "rgba(255,255,255,0.35)",
                    color: "#f4f7ff",
                    height: rem(44),
                    paddingInline: rem(18),
                    background: "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(255,255,255,0.55)",
                    },
                  },
                }}
              >
                Get complaints form
              </Button>
            </a>
          </Group>
        </form>
      </Paper>
    </Modal>
  );
}

export default ComplaintModal;
