$credInput = "protocol=https`nhost=github.com`n"
$credOutput = $credInput | git credential fill
$tokenLine = $credOutput | Where-Object { $_ -like "password=*" }
$token = $tokenLine.Substring(9).Trim()

if (-not $token) {
    Write-Error "Token nao encontrado"
    exit 1
}

git add .
git commit -m "refactor: humanizacao de copy e refinamento visual de alto padrao sem aparencia de IA"
git remote set-url origin "https://dev-victor16:$token@github.com/dev-victor16/adalberto-orly-imoveis.git"
git push origin main
git remote set-url origin "https://github.com/dev-victor16/adalberto-orly-imoveis.git"
Write-Output "Push dos refinamentos concluido!"
