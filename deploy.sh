#!/bin/bash

ng build --output-path=docs --base-href=/pokemon-team-overview/

if [ -d "docs/browser" ]; then
  echo "Déplacement du contenu de docs/browser/ vers docs/"
  mv docs/browser/* docs/
  rmdir docs/browser
else
  echo "Le dossier docs/browser n'existe pas, rien à déplacer."
fi

cp docs/index.html docs/404.html

echo "Déploiement local terminé"
