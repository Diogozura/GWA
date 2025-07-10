import { Box, Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function FormContact({ t, lang }: { t: Record<string, string>, lang: string }) {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        howFoundUs: "",
        memberName: "",
        why: "",
    });

    const [sending, setSending] = React.useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        try {
            await fetch("https://v1.nocodeapi.com/gwa/google_sheets/ilwfHHMKVdprsqbV?tabId=contato", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([
                    [
                        formData.name,
                        formData.email,
                        formData.phone,
                        formData.howFoundUs,
                        formData.memberName,
                        formData.why,
                        new Date().toLocaleString(),
                        lang,
                    ]
                ]),
            });
        } catch (err) {
            console.error(err);
            alert("Erro ao enviar.");
        } finally {
            setSending(false);
            setSubmitted(true);
        }
    };

    const [submitted, setSubmitted] = React.useState(false);

    return (
        <>
            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box textAlign="center" mt={6}>
                            <img
                                src="/codeQR.png" // substitua por uma imagem que tenha ou coloque no /public
                                alt="Success"
                                style={{
                                    maxWidth: 180,
                                    margin: '0 auto',
                                    borderRadius: '12px',
                                }}
                            />
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom color="white">
                                    {t.tkssubscribe}
                                </Typography>
                                <Typography variant="body1" color="white" mb={3}>
                                     {t.subscribe}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="https://doobsystem.com/app/GWABCN-8C"
                                    target="_blank"
                                    sx={{
                                        background: '#ffa500',
                                        color: '#111',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            background: '#ff9900',
                                        },
                                    }}
                                >
                                   {t.platform}
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    label={t.name}
                                    name="name"
                                    fullWidth
                                    margin="normal"
                                    variant="filled"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    InputProps={{ style: { backgroundColor: 'white' } }}
                                />

                                <TextField
                                    placeholder="So we can slide into your DMs (with an invite, no SPAM ever!)"
                                    label={t.email}
                                    name="email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    variant="filled"
                                    onChange={handleChange}
                                    value={formData.email}
                                    InputProps={{ style: { backgroundColor: 'white' } }}
                                />
                                <TextField
                                    placeholder="In case you forget your lighter... or something else"
                                    label={t.phone}
                                    name="phone"
                                    fullWidth
                                    margin="normal"
                                    variant="filled"
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                                <TextField
                                    label={t.how_found_us}
                                    name="howFoundUs"
                                    fullWidth
                                    select
                                    margin="normal"
                                    variant="filled"
                                    value={formData.howFoundUs}
                                    onChange={handleChange}
                                    required                    >
                                    <MenuItem value="social">Instagram / Social Media</MenuItem>
                                    <MenuItem value="web">Google / Website</MenuItem>
                                    <MenuItem value="friend">Referred by a Member</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </TextField>
                                {formData.howFoundUs === "friend" && (
                                    <TextField
                                        label={t.member_name}
                                        name="memberName"
                                        fullWidth
                                        margin="normal"
                                        variant="filled"
                                        value={formData.memberName}
                                        onChange={handleChange}
                                        required
                                        InputProps={{ style: { backgroundColor: 'white' } }}
                                    />
                                )}
                                <TextField
                                    placeholder='Impress us. Or just say "I like nice people and good vibes" that works too.'
                                    label={t.why_join}
                                    name="why"
                                    multiline
                                    rows={3}
                                    fullWidth
                                    margin="normal"
                                    variant="filled"
                                    onChange={handleChange}
                                    value={formData.why}
                                    InputProps={{ style: { backgroundColor: 'white' } }}
                                />

                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    disabled={sending}
                                    type="submit"
                                    sx={{
                                        mt: 3,
                                        fontWeight: 'bold',
                                        background: '#7e00ff',
                                        '&:hover': { background: '#5a00c2' },
                                    }}
                                >
                                    {sending ? "Enviando..." : t.submit}
                                </Button>
                            </Stack>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}