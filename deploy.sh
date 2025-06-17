#!/bin/bash

# Étape 1 : build Angular avec base-href et output dans docs/
ng build --output-path=docs --base-href=/pokemon-team-overview/

# Étape 2 : déplacer le contenu de docs/browser/ vers docs/ (si le dossier existe)
if [ -d "docs/browser" ]; then
  echo "Déplacement du contenu de docs/browser/ vers docs/"
  mv docs/browser/* docs/
  rmdir docs/browser
else
  echo "Le dossier docs/browser n'existe pas, rien à déplacer."
fi

# Étape 3 : copier index.html en 404.html
cp docs/index.html docs/404.html

echo "✅ Déploiement local terminé. Tu peux maintenant push sur GitHub."
