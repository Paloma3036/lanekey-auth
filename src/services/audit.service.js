const auditRepository = require('../repositories/audit.repository');

async function logAction({ email, action, ip }) {
  await auditRepository.createAuditLog({
    email,
    action,
    ip,
  });
}

async function getLogs() {
  return auditRepository.findAllLogs();
}

module.exports = {
  logAction,
  getLogs,
};

