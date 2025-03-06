default:
    just --list

make-certs:
    mkcert localhost

start-proxy: make-certs
    npx local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem

run-with-https:
    just start-proxy & npm run dev
