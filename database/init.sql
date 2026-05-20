-- Criação da tabela de tokens temporários
CREATE TABLE IF NOT EXISTS temporary_tokens (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    token_hash VARCHAR(64) NOT NULL,
    used BOOLEAN DEFAULT false,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Criação da tabela de logs de auditoria
CREATE TABLE IF NOT EXISTS audit_logs (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    action VARCHAR(100) NOT NULL,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT NOW()
);
