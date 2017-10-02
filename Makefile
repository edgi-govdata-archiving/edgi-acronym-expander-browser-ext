download:
	curl -s https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7XtD1yzL1Y2UdXy3djbpIzN7gP5benUcGJWtVpgxZlIJUv3Uu-17et6goNMSe_iK-7ez8KqTilGwe/pub?output=csv > acronyms.csv

csv2json: download ## Generate acronyms.json from acronyms.csv
	python scripts/csv2json.py

%:
	@true

.PHONY: help

help:
	@echo 'Usage: make <command>'
	@echo
	@echo 'where <command> is one of the following:'
	@echo
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

