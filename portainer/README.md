
# Credentials

The dev_admin_pass file will only be used for development abd it is only loaded when
the system is started with docker-compose up.

When deploying on swarm (docker stack deploy), this credential is ignored and secrets must be used instead. Therefore, there is no risk having this on the repo and it is used only for convenience.

Development credentials:
```
username: admin
password: lusoadmin
```