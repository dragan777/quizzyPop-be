const jwt = require("jsonwebtoken");
require('dotenv').config();
const axios = require('axios');
const publicKeys = {
        "e81f052aef040a97c39d265381de6cb434bc35f3": "-----BEGIN CERTIFICATE-----\nMIIDHTCCAgWgAwIBAgIJAIzrl9JJn3YtMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV\nBAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTI1\nMDkyNjIwMzcyNVoXDTI1MTAxMzA4NTIyNVowMTEvMC0GA1UEAwwmc2VjdXJldG9r\nZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQCtJ/UuMA9kSbojcRqFrqbW1ptO5aBFyRlKGok0GJVMtXE8\n8cuJBxRyjM+8VZMJaoFLfhSIOxq3cy/xr8OyyUAvH4oBtyQR6CoQmFClnvuW8Ywk\nnDfEIXAoScTnkCBiCgNHh5VE+EKMf5VlrrFJjPXKFz1yWqzdLaPbpK638FMLPNnn\nUyj6jnh1unf0Y086H3cwKwu/3bPGY7Z2JFf6T7N7vMBXi5AgSUytu5OB6MRBD53L\nOgBRZ6RyXkogH/IWy2987TfzQOlveqYEwBksHQQsmHhh1k7mNnwskBpo12xFLtxF\nQFbZ5u/YMHDdVEDeeI4Z2kXZBKcl5Q7UPVet5dRNAgMBAAGjODA2MAwGA1UdEwEB\n/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G\nCSqGSIb3DQEBBQUAA4IBAQAbQpS+Jtdevhjm2f40GMSnk8KdIxjRBYzjhpD2omAs\n1axE5ADb+yLP7GN6F5xwK30SpwDKuOJON6Vzux5NW9Z+Y+tOrKIHXxgUh6F4+Hm3\ncojrMnxbgbIE3KDBjg717ik+SFOTWMFwSNwjpQWz2BrtTkDYZL0yU2wxllL4yG2+\ndIYtbpD3nhxHngn5lIpAcbLno26M+H/9McHaal58s8xIeufs04W9wWuJCFu9rM9s\n0USBaZp1POCfST1UCFp9G9XtYBU3f0ydM0n7URQm5cVGibE3mxycEf6153HzLVYK\nooXxASgW1IMPxxrrnPpw+j9YHlxukRscPhZ0ytATxRv2\n-----END CERTIFICATE-----\n",
        "0557726fab1231fa2dcc5721a1083da680c4a73f": "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIISUxXNkH7EQQwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAwwmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjUw\nOTE4MjAzNzI0WhcNMjUxMDA1MDg1MjI0WjAxMS8wLQYDVQQDDCZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAKrjwgxjpGRBOFYrTs4+eGsUWzLtiNFN94ngvfc8gG0LI5YU\njYxWiLSxUzofJOgn2rzPX+Szmea8U/X5x4/0zI3vxq1Q8a1wOLPHn44Fcycb1pzj\nr9ZNwB2RCr1Y6tiYlQ2ORsdQSjfwDQ9yFJpzrackqJrYtqjvINO8PJMUCxQOBniz\nf72M0LpfCW9aQAnYpRtMbftgUMwkDpPdmsedZtCiL8AthWad8GKNNE4s0bvH2Xqe\nKVdI1cqr7T1Cw5vvMrBCT2hhTdgNUoecg3L34I8R0hoUsaNr6aEgfS/OAwc8STNP\nbDbYgPwd2/gui2caPzlG/jkQ5Gbr2sVDxJnNQCMCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAF3CyrQ1q5We+e+WHIm9i1xoFt4+el9oVzwJCxfWibSO\nJGHAkjyIN6St23STAd4ZQSgSMw40Mh/n6AlS/77i4nHWXRSVAhQhV1WIQKfqlxwx\nWh4Gq9IL4b4TA1DkOXo+5/AYfRTOH1AJkyQM5wD3AXQeCUbxVOtq3QNaIXXtVr6/\nBf61Guz5/11Pb/y3jpGzqsnHBkSntgkf/P0SSq+dDf11rlk0R7woicJbwSvLrDqf\nc6uZwQ/YCPXcAiqpR7i6HwxUmqw25dBTPkj6w2bKhP87kCo9qCEjlbt3V9m7/qca\nqYXg5nu9VUg3C4goe+iUB4T3ID5GhXqDbwyv85RWF4Y=\n-----END CERTIFICATE-----\n"
    }
;
async function verifyFirebaseToken(token) {
    try {
        const response = await axios.get('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com');
        const publicKeys = response.data;

        const header = JSON.parse(Buffer.from(token.split('.')[0], 'base64').toString());
        const publicKey = publicKeys[header.kid];

        if(!publicKey) throw new Error("public key not found");
        console.log(process.env.projectId)
        const decoded = jwt.verify(token, publicKey, {
            algorithms: ['RS256'],
            issuer: 'https://securetoken.google.com/quizzypop-6085e',
            audience: "quizzypop-6085e"
        });
        console.log(decoded);
        return decoded;
    }catch (err) {
        throw err;
    }

}

const jwtFilter = (paths = []) => {
    return (req, res, next) => {
        if (paths.includes(req.path)) return next();

        const authHeader = req.headers.authorization;
        console.log("authheader: ", authHeader);
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: no token provided" });
        }

        const token = authHeader.split(" ")[1];
        console.log("token: ",token)
        try {
            req.user = verifyFirebaseToken(token);
            console.log(req.user);
            next();
        } catch (err) {
            return res.status(401).json({ message: "Forbidden, Invalid token!" });
        }
    };
};

module.exports = jwtFilter;
