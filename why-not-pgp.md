# Why use Enigma Reloaded instead of PGP

- compared to existing pgp tools out there, enigma reloaded is a simple web app, which works on all platforms, has offline support and you can even self host it
- x25519-xsalsa20-poly1305 which is used by enigma has key performance advantages over PGP which in turn uses RSA
  - Key size
     - Enigma reloaded private and public keys are just 32 bytes long
     - PGP private and public keys are way over that number
  - Message size
     - PGP message example for string "hey whats'up": wcBMA8WefRHatToIAQf/Ws7fyO3DkHGCdzlH2ojs4Df+ps5afAj7CUW4QXCefgxVMZUzTPfeMUsTyAn7bGA0Pt5LHSlDGXn9taErbtqY9C4hgPU3HOhQNP+bbQku2y84olHjgfl5N5JbrwhATsxeWOXAGBFfrzpojHx4iry3DcaUCPZT2d85YJoChNQG4dVnynk1RA2u+14r+L7Fg0BhNhqyqUo4t5t8ST9RiYhd7xJOEIYma4R+me2xNf6aij7D9IbPsyqbj9RoU8olAnBJO1qc/9ACacUQG4D7gxIZnrdeRFdTlw8oVlRdZ4LUuiI7OpxYOsYFt6OtQgJWWwtgFZ4wZDhYkSs73dTMBGWJ6tJGAdF78/Y5SVBLPgHWh2NINcTcd7JqhUKpeMR/4cNKMDTTzULDyP2+9LqEArGfCskMPK/CBBgfQzmx1ejW0ZGdNxpzqABA0w===hHzK
     - Enigma output message for the same string: "T D/xp70RFEM DUN7g52mm xoC55k2 z8wZaqCYN s9Ex VYE !t F5X 2m a xmrXWn aVmQDYAK 6gTnR32 t2hY"
  - Speed
     - PGP key generation is much slower than enigma-reloaded, which only needs to generate one 32 byte string
     - Encoding and decoding message take more time with PGP

Why output size matters for this project? Because if you have really long output, you can't use it with:
- sms
- print it on the paper(why waste more paper and ink)
- services which limit the message size
