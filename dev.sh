#!/bin/bash

echo "🚀 Iniciando desenvolvimento local do Frontend..."
echo "📁 Diretório: $(pwd)"
echo "🌐 URL: http://localhost:3000"
echo "🔧 Modo: Desenvolvimento (Hot Reload ativado)"
echo ""

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Iniciar o servidor de desenvolvimento
echo "🔥 Iniciando servidor de desenvolvimento..."
echo "💡 Pressione Ctrl+C para parar"
echo ""

npm run dev 