# DockerSwarm-aula

```npm init -y```

```npm install express dotenv```

```docker build -t aula7maio .```

```docker swarm init```

```docker service create --name aula7maio --replicas 5 -p 3000:3000 aula7maio```

```curl http://localhost:3000```
