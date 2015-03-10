#!/bin/bash
host_pattern=^.*\..*$
protocol_pattern=\/\/
ssh_pattern=^.*@.*\..*:.*$

# Check for git
git --version > /dev/null 2>&1
GIT_INSTALLED=$?

[[ $GIT_INSTALLED -ne 0 ]] && { echo "Install git before executing this script."; exit 0; }

test_init=false
while getopts ":t" opt; do
  case $opt in
    t) test_init=true;;
    \?) echo "Invalid option: -$OPTARG" >&2; exit 1;;
  esac
done

# Get input for Git
if [[ $test_init == false ]]; then
  repo_url=""
  while [[ $repo_url == false ]] || [[ ! $repo_url =~ $ssh_pattern ]]; do
    if [[ $repo_url != "" ]]; then
      echo "Invalid Git SSH URL"
    fi
    read -p "Enter Git SSH URL: " repo_url
  done
fi

# Get input for configs
dev_api_host=""
while [[ ! $dev_api_host =~ $host_pattern ]] || [[ $dev_api_host =~ $protocol_pattern ]]; do
  read -p "Enter Dev API Host [api.project.vm]: " dev_api_host
done

qa_api_host=""
while [[ ! $qa_api_host =~ $host_pattern ]] || [[ $qa_api_host =~ $protocol_pattern ]]; do
  read -p "Enter QA API Host [api-project-com.example.com]: " qa_api_host
done

production_api_host=""
while [[ ! $production_api_host =~ $host_pattern ]] || [[ $production_api_host =~ $protocol_pattern ]]; do
  read -p "Enter Production API Host [api.project.com]: " production_api_host
done

# Confirm settings are correct
echo -e "\n"
if [[ $test_init == false ]]; then
  echo -e "Git URL\t\t\t$repo_url"
fi

echo -e "Dev API Host\t\t$dev_api_host"
echo -e "QA API Host\t\t$qa_api_host"
echo -e "Production API Host\t$production_api_host"
echo -e "\n"

read -p "Are these settings correct? " confirm
if [[ $confirm =~ ^[yY] ]]; then

  if [[ $test_init == false ]]; then
    # Intialize new git repo
    set -e
    rm -rf .git
    git init

    git remote add origin $repo_url
    git checkout -b master
  fi

  echo "Updating config files"
  sed -i "" s/%DEV_API_HOST%/$dev_api_host/g "./application/config/development.js"
  sed -i "" s/%QA_API_HOST%/$qa_api_host/g "./application/config/qa.js"
  sed -i "" s/%PRODUCTION_API_HOST%/$production_api_host/g "./application/config/production.js"

  if [[ $test_init == false ]]; then
    rm initialize.sh
  fi
else
  echo "Initialization cancelled"
fi
